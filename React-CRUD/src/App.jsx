import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Create from "./Components/Create/Create";
import Read from "./Components/Read/Read";
import Update from "./Components/Update/Update";
import 'bootstrap/dist/css/bootstrap.min.css'


function App(){
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
        <Route path="/read/:id" element={<Read/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;