// import css from './Options.module.css';

const Options = ({ state, onClickButton, resetCounters, totalFeedback }) => {
  // const Options = ({ state, onClickButton, updateFeedback }) => {
  return (
    <ul>
      {state.map((item, index) => (
        <li key={index}>
          <button onClick={() => onClickButton(item)}>{item}</button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li>
          <button onClick={resetCounters}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
