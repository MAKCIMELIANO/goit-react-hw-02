import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import './App.css';

export default function App({ title }) {
  const [good, setGood] = useState(() => {
    const savedGood = localStorage.getItem('good');
    return savedGood !== null ? parseInt(savedGood) : 0;
  });

  const [neutral, setNeutral] = useState(() => {
    const savedNeutral = localStorage.getItem('neutral');
    return savedNeutral !== null ? parseInt(savedNeutral) : 0;
  });

  const [bad, setBad] = useState(() => {
    const savedBad = localStorage.getItem('bad');
    return savedBad !== null ? parseInt(savedBad) : 0;
  });

  const [positive, setPositive] = useState(0);

  const totalFeedback = good + neutral + bad;

  const handleFeedback = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'reset':
        setGood(0);
        setNeutral(0);
        setBad(0);
        localStorage.removeItem('good');
        localStorage.removeItem('neutral');
        localStorage.removeItem('bad');
        break;
      default:
        console.error(`Unknown feedback type: ${type}`);
    }
  };

  useEffect(() => {
    if (totalFeedback > 0) {
      setPositive(Math.round((good / totalFeedback) * 100));
    } else {
      setPositive(0);
    }
  }, [good, neutral, bad, totalFeedback]);

  useEffect(() => {
    localStorage.setItem('good', good);
  }, [good]);

  useEffect(() => {
    localStorage.setItem('neutral', neutral);
  }, [neutral]);

  useEffect(() => {
    localStorage.setItem('bad', bad);
  }, [bad]);

  return (
    <div>
      <h1>{title}</h1>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options onFeedback={handleFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification notification="No feedback given" />
      )}
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
