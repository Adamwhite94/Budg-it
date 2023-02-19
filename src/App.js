import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import BudgetingHome from "./Components/BudgetingHome/BudgetingHome";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./Components/Expenses/Expenses";
import {
  GainedContext,
  SpentContext,
  budgetContext,
} from "./Components/Expenses/Context/Contexts";
import { useState, useMemo, useEffect } from "react";

function App() {
  const [value, setValue] = useState(null);
  const [loss, setLoss] = useState(null);
  const [budget, setBudget] = useState(null);

  const profitValue = useMemo(
    () => ({ value, setValue }), 
    [value, setValue]
    );
  const spentValue = useMemo(
    () => ({ loss, setLoss }), 
    [loss, setLoss]
    );
  const budgetValue = useMemo(
    () => ({ budget, setBudget }),
    [budget, setBudget]
  );

  const storeValue = (profitValue) => {
    window.localStorage.setItem("gainedvalue", profitValue);
  };
  const storeSpentValue = (spentValue) => {
    window.localStorage.setItem("spentvalue", spentValue);
  };

  const storeBudget = (budgetValue) => {
    window.localStorage.setItem("budgetvalue", budgetValue);
  };

  return (
    <>
      <GlobalStyle />
      {/* <Navbar /> */}
      <BrowserRouter>
        <GainedContext.Provider value={{ profitValue, storeValue }}>
          <SpentContext.Provider value={{ spentValue, storeSpentValue }}>
            <budgetContext.Provider value={{ budgetValue, storeBudget }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/*">
                  <Route index element={<BudgetingHome />} />
                  <Route path="expenses" element={<Expenses />} />
                </Route>
              </Routes>
            </budgetContext.Provider>
          </SpentContext.Provider>
        </GainedContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
