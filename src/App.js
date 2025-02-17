import { Routes, Route, BrowserRouter, } from "react-router";
import Homepage from "./Pages/Homepage";
import Menu from "./Pages/Menu";
import Reservation from "./Pages/Reservation";
import View from "./Pages/View";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}>
        <Route index element={<View />}/>
        <Route path='menu' element={<Menu />}/>
        <Route path='reservation' element={<Reservation />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
