import css from './Options.module.css';

const Options = ({ state, onClickButton, resetCounters, totalFeedback }) => {
  // const Options = ({ state, onClickButton, updateFeedback }) => {
  return (
    <>
      {state.map((item, index) => (
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
    </>
  );
};

export default Options;
