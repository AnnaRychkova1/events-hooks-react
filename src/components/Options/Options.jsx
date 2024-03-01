import css from './Options.module.css';

const Options = ({ state, onClickButton, resetCounters, totalFeedback }) => {
  return (
    <ul className={css.optionsContainer}>
      {Object.keys(state).map((item, index) => (
        <li key={index}>
          <button
            className={css.optionsButton}
            onClick={() => onClickButton(item)}
          >
            {item}
          </button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li>
          <button className={css.optionsButtonReset} onClick={resetCounters}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
