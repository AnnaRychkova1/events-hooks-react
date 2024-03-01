import { useState, useEffect } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const InitialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [counters, setCounters] = useState(() => {
    const stringifiedFeedback = localStorage.getItem('feedback');
    return JSON.parse(stringifiedFeedback) || InitialState;
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(counters));
  }, [counters]);

  const updateFeedback = feedbackType => {
    setCounters(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedback = counters.good + counters.neutral + counters.bad;

  const resetCounters = () => {
    setCounters(InitialState);
  };

  const positiveFeedback = () => {
    return Math.round(
      ((counters.good + counters.neutral) / totalFeedback) * 100
    );
  };

  return (
    <>
      <Description />
      <Options
        state={InitialState}
        onClickButton={updateFeedback}
        resetCounters={resetCounters}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          state={InitialState}
          counters={counters}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
