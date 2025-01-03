import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import './App.css';

export default function App({ title }) {
  const [feedback, setFeedback] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedFeedback = localStorage.getItem('feedback');
      return savedFeedback
        ? JSON.parse(savedFeedback)
        : { good: 0, neutral: 0, bad: 0 };
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  const handleFeedback = type => {
    switch (type) {
      case 'good':
        setFeedback(prev => ({ ...prev, good: prev.good + 1 }));
        break;
      case 'neutral':
        setFeedback(prev => ({ ...prev, neutral: prev.neutral + 1 }));
        break;
      case 'bad':
        setFeedback(prev => ({ ...prev, bad: prev.bad + 1 }));
        break;
      case 'reset':
        setFeedback({ good: 0, neutral: 0, bad: 0 });
        if (typeof window !== 'undefined') {
          localStorage.removeItem('feedback');
        }
        break;
      default:
        console.error(`Unknown feedback type: ${type}`);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('feedback', JSON.stringify(feedback));
    }
  }, [feedback]);

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
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
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
