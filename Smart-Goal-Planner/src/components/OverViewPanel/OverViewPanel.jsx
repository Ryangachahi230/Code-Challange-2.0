
import React from "react";

const OverviewPanel = ({ goals }) => {
  const totalTarget = goals.reduce((acc, g) => acc + g.targetAmount, 0);
  const totalSaved = goals.reduce((acc, g) => acc + g.savedAmount, 0);

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Target: {totalTarget}</p>
      <p>Total Saved: {totalSaved}</p>
    </div>
  );
};

export default OverviewPanel;
