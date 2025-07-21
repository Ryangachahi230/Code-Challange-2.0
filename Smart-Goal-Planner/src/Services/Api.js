const BASE_URL = "http://localhost:3001/goals";

export async function fetchGoals() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function createGoal(goal) {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  });
}

export async function updateGoal(id, updatedGoal) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedGoal),
  });
}

export async function deleteGoal(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}
