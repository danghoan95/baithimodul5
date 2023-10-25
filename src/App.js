import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import DisplayTour from "./tour/display";
import CreateTour from "./tour/create";
import UpdateTour from "./tour/update";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<DisplayTour></DisplayTour>}></Route>
        <Route path={'/create'} element={<CreateTour></CreateTour>}></Route>
        <Route path={'/update/:id'} element={<UpdateTour></UpdateTour>}></Route>




      </Routes>
  );
}

export default App;
