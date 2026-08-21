import { formatter } from "../util/investment";

function Results({ results }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest Earned</th>
          <th>Investment Value</th>
          <th>Annual Investment</th>
        </tr>
      </thead>
      <tbody>
        {results.map((annualData) => (
          <tr key={annualData.year}>
            <td>{annualData.year}</td>
            <td>{formatter.format(annualData.interest)}</td>
            <td>{formatter.format(annualData.valueEndOfYear)}</td>
            <td>{formatter.format(annualData.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;
