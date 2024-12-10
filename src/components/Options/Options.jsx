import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Options.module.css';

export default function Options({ onFeedback, totalFeedback }) {
  return (
    <div className={css.container}>
      <button
        onClick={() => onFeedback('good')}
        className={clsx(css.button, css.good)}
      >
        Good
      </button>
      <button
        onClick={() => onFeedback('neutral')}
        className={clsx(css.button, css.neutral)}
      >
        Neutral
      </button>
      <button
        onClick={() => onFeedback('bad')}
        className={clsx(css.button, css.bad)}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={clsx(css.button, css.reset)}
          onClick={() => onFeedback('reset')}
        >
          Reset
        </button>
      )}
    </div>
  );
}

Options.propTypes = {
  onFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number,
};
