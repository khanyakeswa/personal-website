import React from 'react';

function ScrollButton() {
    return (
        <div class="scroll-button">
        <div class="scroll-up">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8.21 5.66"
          >
            <path
              d="M3.58 2.61a.67.67 0 0 1 1 0L7.1 5.46c.24.29.55.24.82 0l.12-.14a.89.89 0 0 0-.07-1.18L4.65.29a.67.67 0 0 0-1 0L.25 4.1a.89.89 0 0 0-.06 1.18l.13.14c.26.28.57.33.81 0 .81-1 1.64-1.89 2.45-2.85"
              fill="#e44f40"
              data-name="website 1"
            />
          </svg>
        </div>
        <div class="scroll-down">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8.21 5.66"
          >
            <path
              d="M4.62 3.05a.67.67 0 0 1-1 0c-.82-1-1.64-1.9-2.45-2.86C.93-.1.62-.04.35.24L.23.38A.88.88 0 0 0 .3 1.55l3.32 3.86a.67.67 0 0 0 1 0l3.33-3.86A.88.88 0 0 0 8.01.38L7.88.24c-.26-.28-.57-.34-.81-.05-.81 1-1.64 1.9-2.45 2.86"
              fill="#e44f40"
              data-name="website 1"
            />
          </svg>
        </div>
      </div>
    );
}

export default ScrollButton;