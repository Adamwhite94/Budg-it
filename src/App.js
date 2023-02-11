import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import BudgetingHome from './Components/BudgetingHome/BudgetingHome';
import GlobalStyle from './GlobalStyles';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Expenses from './Components/Expenses/Expenses';
function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Navbar /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/user/*'>
          <Route index element = {<BudgetingHome />}  />
           <Route path='expenses' element={<Expenses />} />
        </Route>
      </Routes>
      </BrowserRouter>
 
    </>
  );
}

export default App;
