import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);

  const [annualInvestment, setAnnualInvestment] = useState(0);

  const [expectedReturn, setExpectedReturn] = useState(0);

  const [duration, setDuration] = useState(0);

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
      />
    </>
  );
}

export default App;
