import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Feedback.module.css';

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div className={css.feedback}>
      <ul className={css.feedbackList}>
        <li className={clsx(css.feedbackItem, css.good)}>Good: {good}</li>
        <li className={clsx(css.feedbackItem, css.neutral)}>
          Neutral: {neutral}
        </li>
        <li className={clsx(css.feedbackItem, css.bad)}>Bad: {bad}</li>
        <li className={css.feedbackItem}>Total: {total}</li>
        <li className={css.feedbackItem}>Positive: {positive}%</li>
      </ul>
    </div>
  );
}

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
