import { Routes, Route, BrowserRouter, } from "react-router";
import Homepage from "./Pages/Homepage";
import Menu from "./Pages/Menu";
import Reservation from "./Pages/Reservation";
import View from "./Pages/View";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}>
        <Route index element={<View />}/>
        <Route path='menu' element={<Menu />}/>
        <Route path='reservation' element={<Reservation />}/>
        <Route path='about' element={<About />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
