// import css from './Feedback.module.css'

const Feedback = ({ state, counters, totalFeedback, positiveFeedback }) => {
  return (
    <>
      {state.map((item, index) => (
        <li key={index}>
          <p>
            {item}: {counters[item] || 0}
          </p>
        </li>
      ))}
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {positiveFeedback()}% </p>
      </li>
    </>
  );
};

export default Feedback;
