import React from "react";

const GoalList = ({ goals }) => {
  return (
    <div>
      <h2>Goals</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.title}: {goal.savedAmount} / {goal.targetAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
