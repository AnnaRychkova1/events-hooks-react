import { useState, useEffect } from 'react';

import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import css from './App.module.css';

function App() {
  let state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const keys = Object.keys(state);
  const [counters, setCounters] = useState(() => {
    const stringifiedFeedback = localStorage.getItem('feedback');
    if (!stringifiedFeedback) return state;

    const parsedFeedback = JSON.parse(stringifiedFeedback);

    return parsedFeedback;
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(counters));
  }, [counters]);

  const updateFeedback = feedbackType => {
    setCounters(prevState => ({
      ...prevState,
      [feedbackType]: (prevState[feedbackType] || 0) + 1,
    }));
  };

  if (!counters.good) {
    counters.good = 0;
  }
  if (!counters.neutral) {
    counters.neutral = 0;
  }
  if (!counters.bad) {
    counters.bad = 0;
  }

  const totalFeedback = counters.good + counters.neutral + counters.bad;

  const resetCounters = () => {
    setCounters(state);
  };

  const positiveFeedback = () => {
    return Math.round(
      ((counters.good + counters.neutral) / totalFeedback) * 100
    );
  };

  return (
    <>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.leaveFeedback}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <ul className={css.optionsContainer}>
        <Options
          state={keys}
          onClickButton={updateFeedback}
          resetCounters={resetCounters}
          totalFeedback={totalFeedback}
        />
      </ul>

      {totalFeedback > 0 && (
        <ul className={css.feedbackContainer}>
          <Feedback
            state={keys}
            counters={counters}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </ul>
      )}

      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;
