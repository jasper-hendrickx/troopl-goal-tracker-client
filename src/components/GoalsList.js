import React from 'react';
import GoalsForm from './GoalsForm';

const apiUrl = `http://localhost:3001/api/v1/goals`;

const GoalsList = () => {
  return (
    <div>
      <GoalsForm />
      <ul>
        <li>
          <details>
            <summary>Intro to CS</summary>
            <p>
              <ol>
                <li>Study theory</li>
                <li>Write blog post</li>
                <li>Build project</li>
              </ol>
            </p>
          </details>
        </li>
        <li>Relational Databases</li>
        <li>Linear Algebra</li>
        <li>Information Science</li>
        <li>Model Driven Development</li>
      </ul>
    </div>
  );
};

export default GoalsList;
