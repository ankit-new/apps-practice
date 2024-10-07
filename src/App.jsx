import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crud from "./pages/Crud";
import Navbar from "./components/Navbar/Navbar";
import CrudEdit from "./components/crud/CrudEdit";
import NewCrud from "./components/crud/newCrud";
import Home from "./pages/Home";
import Todo from "./pages/Todo";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/crud" element={<Crud />}></Route>
        <Route path="/edit/:id" element={<CrudEdit />} />
        <Route path="/newProduct" element={<NewCrud />} />
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
