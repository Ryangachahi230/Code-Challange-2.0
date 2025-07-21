import React, { useState } from "react";


const DepositForm = ({ onDeposit }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount)) {
      onDeposit(numericAmount);
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Deposit Amount:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;
