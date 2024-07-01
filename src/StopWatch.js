import React, { useState, useEffect } from 'react';

const StopWatch = () => {
  const [timer, setTimer] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });

  const [isRunning, setIsRunning] = useState();
  let hour = 0,
    minute = 0,
    seconds = 0,
    ms = 0;
  const handleStart = () => {
    setIsRunning(setInterval(timeFormat, 50));
  };

  const handleStop = () => {
    clearInterval(isRunning);
  };

  const handleReset = () => {
    clearInterval(isRunning);
    setTimer({ hr: 0, min: 0, sec: 0, milli: 0 });
  };

  const timeFormat = () => {
    if (ms > 100) {
      seconds++;
      ms = 0;
    }
    if (seconds > 60) {
      minute++;
      seconds = 0;
    }

    if (minute > 60) {
      hour++;
      minute = 0;
    }
    ms++;
    setTimer({ hr: hour, min: minute, sec: seconds, milli: ms });
  };

  return (
    <>
      <div className="container">
        Stop Watch App
        <div className="timer">
          <h1>
            {timer.hr +
              ' : ' +
              timer.min +
              ' : ' +
              timer.sec +
              ' : ' +
              timer.milli}
          </h1>
        </div>
        <div className="controls">
          <button className="start" onClick={handleStart}>
            Start
          </button>
          <button className="stop" onClick={handleStop}>
            Stop
          </button>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
