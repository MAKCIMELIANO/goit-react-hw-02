import PropTypes from 'prop-types';
import css from './Description.module.css';

export default function Description({ title, description }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.description}>{description}</p>
    </div>
  );
}

Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
