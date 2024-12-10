import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Feedback.module.css';

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div className={css.feedback}>
      <ul className={css.feedbackList}>
        <li className={clsx(css.feedbackItem, css.good)}>
          Good: {good}
          <FaSmile className={clsx(css.icon, css.good)} />
        </li>
        <li className={clsx(css.feedbackItem, css.neutral)}>
          Neutral: {neutral}
          <FaMeh className={clsx(css.icon, css.neutral)} />
        </li>
        <li className={clsx(css.feedbackItem, css.bad)}>
          Bad: {bad}
          <FaFrown className={clsx(css.icon, css.bad)} />
        </li>
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
