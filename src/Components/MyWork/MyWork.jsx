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
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <div className="mywork-container">
        {mywork_data.slice(0, visibleCount).map((work, index) => (
          <div key={index} className="mywork-item">
            <img src={work.w_img} alt={work.w_name} />

            {/* Overlay content */}
            <div className="overlay">
              <p className="project-name">{work.w_name}</p>
              <a 
                href={work.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-icon"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 496 512" 
                  width="50" 
                  height="50"
                  className="github-svg"
                >
                  <defs>
                    <linearGradient id="githubGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#B415FF" />
                      <stop offset="50%" stopColor="#DF8908" />
                      <stop offset="100%" stopColor="#B415FF" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6
                       -3.3 0-5.6-1.6-5.6-3.6 0-2 2.3-3.6
                       5.2-3.6 3.3 0 5.6 1.6 5.6 3.6zm-31.1
                       -2.2c-.7 2 .8 4.3 3.3 5.2 2.5.9 5.4 
                       0 6.1-2 .7-2-.8-4.3-3.3-5.2-2.5-.9-5.4
                       0-6.1 2zm44.2-1.7c-2.9.8-4.9 2.9-4.4
                       5.1.5 2.2 3.2 3.4 6.1 2.6 2.9-.8 
                       4.9-2.9 4.4-5.1-.5-2.1-3.2-3.4-6.1-2.6zM244 
                       8C108.9 8 0 117.2 0 252.3c0 108.3 
                       69.8 200.3 166.4 232.9 12.2 2.2 
                       16.6-5.3 16.6-11.7 0-5.8-.2-24.9-.3-45.1
                       -67.7 14.7-82-32.6-82-32.6-11.1-28.3
                       -27-35.9-27-35.9-22.1-15.1 1.7-14.8
                       1.7-14.8 24.4 1.7 37.3 25.1 37.3 
                       25.1 21.7 37.2 56.9 26.5 70.8 
                       20.3 2.2-15.7 8.5-26.5 15.4-32.6
                       -54-6.1-110.8-27-110.8-119.8 0-26.5 
                       9.5-48.2 25.1-65.2-2.5-6.2-10.9-31.1 
                       2.4-64.8 0 0 20.5-6.6 67.2 25.1 
                       19.5-5.5 40.4-8.2 61.3-8.3 20.9.1 
                       41.8 2.8 61.3 8.3 46.6-31.7 67.1-25.1 
                       67.1-25.1 13.3 33.7 4.9 58.6 
                       2.4 64.8 15.6 17 25.1 38.7 
                       25.1 65.2 0 92.9-56.9 113.6-111.1 
                       119.6 8.7 7.6 16.5 22.6 16.5 45.6 
                       0 32.9-.3 59.4-.3 67.5 0 6.5 4.4 
                       13.9 16.7 11.6C426.2 452.6 496 
                       360.6 496 252.3 496 117.2 383.1 
                       8 244 8z"
                    fill="url(#githubGradient)"
                  />
                </svg>
              </a>
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