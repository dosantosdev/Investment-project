import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";
import Results from "./components/Results";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);

  const [annualInvestment, setAnnualInvestment] = useState(0);

  const [expectedReturn, setExpectedReturn] = useState(0);

  const [duration, setDuration] = useState(0);

  const results = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  return (
    <>
      <Header />
      <UserInput
        inputInitialInvestment={initialInvestment}
        setInitialInvestment={(e) =>
          setInitialInvestment(Number(e.target.value))
        }
        inputAnnualInvestment={annualInvestment}
        setAnnualInvestment={(e) => setAnnualInvestment(Number(e.target.value))}
        inputExpectedReturn={expectedReturn}
        setExpectedReturn={(e) => setExpectedReturn(Number(e.target.value))}
        inputDuration={duration}
        setDuration={(e) => setDuration(Number(e.target.value))}
      />
      <Results results={results} />
    </>
  );
}

export default App;
