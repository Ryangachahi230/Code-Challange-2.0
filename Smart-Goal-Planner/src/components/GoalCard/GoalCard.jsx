
function GoalCard({ goal, onEdit, onDelete }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const remaining = goal.targetAmount - goal.savedAmount;
  const today = new Date();
  const deadline = new Date(goal.deadline);
  const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
  const isOverdue = daysLeft < 0;
  const isComplete = goal.savedAmount >= goal.targetAmount;

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginTop: 10 }}>
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <p>Remaining: ${remaining}</p>
      <p>Deadline: {goal.deadline}</p>
      <p>{isOverdue ? "Overdue!" : `Days Left: ${daysLeft}`}</p>
      {isComplete && <p>✅ Completed!</p>}
      <div style={{ background: "#eee", height: "10px", marginTop: "5px" }}>
        <div style={{ background: "blue", height: "10px", width: `${progress}%` }} />
      </div>
      <button onClick={() => onEdit(goal)}>Edit</button>
      <button onClick={() => onDelete(goal.id)} style={{ marginLeft: "10px" }}>Delete</button>
    </div>
  );
}

export default GoalCard;



