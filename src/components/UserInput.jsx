function UserInput({
  inputInitialInvestment,
  setInitialInvestment,
  inputAnnualInvestment,
  setAnnualInvestment,
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
    </div>
  );
}

export default UserInput;
