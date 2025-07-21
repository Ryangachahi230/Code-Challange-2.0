import React, { useState, useEffect } from "react";
import AddGoalForm from "./components/AddGoalForm/AddGoalForm.jsx";
import DepositForm from "./components/DepositForm/DepositForm.jsx";
import GoalList from "./components/GoalList/GoalList.jsx";
import OverviewPanel from "./components/OverViewPanel/OverViewPanel.jsx";
import { fetchGoals, createGoal, updateGoal, deleteGoal } from "./Services/Api.js";
import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);
  const [editGoal, setEditGoal] = useState(null);

  // Load goals on first render
  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    try {
      const data = await fetchGoals();
      setGoals(data);
    } catch (error) {
      console.error("Failed to fetch goals:", error);
    }
  };

  const handleAddGoal = async (goal) => {
    try {
      if (editGoal) {
        await updateGoal(editGoal.id, goal);
        setEditGoal(null);
      } else {
        const newGoal = {
          ...goal,
          id: Date.now().toString(),
          savedAmount: 0,
          createdAt: new Date().toISOString().split("T")[0],
        };
        await createGoal(newGoal);
      }
      loadGoals();
    } catch (error) {
      console.error("Error saving goal:", error);
    }
  };

  const handleDeposit = async (goalId, amount) => {
    try {
      const goal = goals.find((g) => g.id === goalId);
      if (!goal) return;

      const updatedGoal = {
        ...goal,
        savedAmount: goal.savedAmount + amount,
      };

      await updateGoal(goalId, updatedGoal);
      loadGoals();
    } catch (error) {
      console.error("Failed to deposit:", error);
    }
  };

  const handleEdit = (goal) => {
    setEditGoal(goal);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this goal?");
    if (!confirmDelete) return;

    try {
      await deleteGoal(id);
      loadGoals();
    } catch (error) {
      console.error("Failed to delete goal:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>Smart Goal Planner</h1>

      <OverviewPanel goals={goals} />

      <AddGoalForm onAddGoal={handleAddGoal} editGoal={editGoal} setEditGoal={setEditGoal} />

      <DepositForm goals={goals} onDeposit={handleDeposit} />

      <GoalList goals={goals} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
