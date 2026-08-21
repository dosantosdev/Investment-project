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
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            value={inputInitialInvestment}
            onChange={setInitialInvestment}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            value={inputAnnualInvestment}
            onChange={setAnnualInvestment}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            value={inputExpectedReturn}
            onChange={setExpectedReturn}
          />
        </div>
        <div>
          <label>Duration</label>
          <input type="number" value={inputDuration} onChange={setDuration} />
        </div>
      </div>
    </div>
  );
}

export default UserInput;
