import css from './Description.module.css';

const Description = () => {
  return (
    <>
      <h1 className={css.descrTitle}>Sip Happens Café</h1>
      <p className={css.descrText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
