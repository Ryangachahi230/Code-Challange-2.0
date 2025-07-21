import { useState, useEffect } from "react";


function AddGoalForm({ onAddGoal, editGoal, setEditGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "Travel",
    deadline: "",
  });

  useEffect(() => {
    if (editGoal) {
      setFormData(editGoal);
    } else {
      setFormData({ name: "", targetAmount: "", category: "Travel", deadline: "" });
    }
  }, [editGoal]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddGoal(formData);
    setFormData({ name: "", targetAmount: "", category: "Travel", deadline: "" });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>{editGoal ? "Edit Goal" : "Add Goal"}</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      /><br />
      <input
        type="number"
        placeholder="Target Amount"
        value={formData.targetAmount}
        onChange={(e) => setFormData({ ...formData, targetAmount: Number(e.target.value) })}
        required
      /><br />
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option>Travel</option>
        <option>Emergency</option>
        <option>Electronics</option>
        <option>Real Estate</option>
        <option>Vehicle</option>
        <option>Education</option>
        <option>Shopping</option>
        <option>Retirement</option>
        <option>Home</option>
      </select><br />
      <input
        type="date"
        value={formData.deadline}
        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
        required
      /><br />
      <button type="submit">{editGoal ? "Update" : "Add"} Goal</button>
    </form>
  );
}

export default AddGoalForm;
