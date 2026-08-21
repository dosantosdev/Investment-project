function UserInput({
  inputInitialInvestment,
  setInitialInvestment,
  inputAnnualInvestment,
  setAnnualInvestment,
  inputExpectedReturn,
  setExpectedReturn,
  inputDuration,
  setDuration,
}) {
  return (
    <div id="user-input">
      <label>Initial Investment</label>
      <input
        type="number"
        value={inputInitialInvestment}
        onChange={setInitialInvestment}
      />
      <label>Annual Investment</label>
      <input
        type="number"
        value={inputAnnualInvestment}
        onChange={setAnnualInvestment}
      />
      <label>Expected Return</label>
      <input
        type="number"
        value={inputExpectedReturn}
        onChange={setExpectedReturn}
      />
      <label>Duration</label>
      <input type="number" value={inputDuration} onChange={setDuration} />
    </div>
  );
}

export default UserInput;
