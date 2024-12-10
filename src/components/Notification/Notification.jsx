import PropTypes from 'prop-types';
import css from './Notification.module.css';

export default function Notification({ notification }) {
  return <p className={css.notification}>{notification}</p>;
}

Notification.propTypes = {
  notification: PropTypes.string.isRequired,
};
