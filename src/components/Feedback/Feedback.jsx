import css from './Feedback.module.css';

const Feedback = ({ state, counters, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.feedbackContainer}>
      {Object.keys(state).map((item, index) => (
        <li className={css.feedbackItem} key={index}>
          <p className={css.feedbackLabel}>
            {item}:<span className={css.feedbackValue}>{counters[item]}</span>
          </p>
        </li>
      ))}
      <li className={css.feedbackItem}>
        <p className={css.feedbackLabel}>
          Total:<span className={css.feedbackValue}>{totalFeedback}</span>
        </p>
      </li>
      <li className={css.feedbackItem}>
        <p className={css.feedbackLabel}>
          Positive:
          <span className={css.feedbackValue}>{positiveFeedback()}% </span>
        </p>
      </li>
    </ul>
  );
};

export default Feedback;
