import React, { useState } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreHandler = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <div id='work' className='mywork'>
      {/* Keep original title */}
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <div className="mywork-container">
        {mywork_data.slice(0, visibleCount).map((work, index) => (
          <div key={index} className="mywork-item">
            <div className="image-container">
              <img src={work.w_img} alt={work.w_name} />
              
              {/* Modern Overlay */}
              <div className="modern-overlay">
                <div className="overlay-content">
                  <h3 className="project-name">{work.w_name}</h3>
                  
                  <div className="action-buttons">
                    {work.github && (
                      <a 
                        href={work.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="icon-btn github-btn"
                        aria-label={`View ${work.w_name} on GitHub`}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          width="24" 
                          height="24"
                        >
                          <path 
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            fill="currentColor"
                          />
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                    
                    {work.demo && (
                      <a 
                        href={work.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="icon-btn demo-btn"
                        aria-label={`View ${work.w_name} demo`}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          width="24" 
                          height="24"
                        >
                          <path 
                            d="M8 5v14l11-7z"
                            fill="currentColor"
                          />
                        </svg>
                        <span>Demo</span>
                      </a>
                    )}
                    
                    {!work.demo && work.github && (
                      <a 
                        href={work.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="icon-btn demo-btn"
                        aria-label={`View ${work.w_name} code`}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          width="24" 
                          height="24"
                        >
                          <path 
                            d="M8 5v14l11-7z"
                            fill="currentColor"
                          />
                        </svg>
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="hover-glow"></div>
            </div>
          </div>
        ))}
      </div>

      
      {visibleCount < mywork_data.length && (
        <div className='mywork-showmore' onClick={showMoreHandler}>
          <p>Show More</p>
          <img src={arrow_icon} alt="arrow" />
        </div>
      )}
    </div>
  );
};

export default MyWork;