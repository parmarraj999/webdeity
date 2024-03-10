import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./layouts/nav/nav.js";
import Main from "./layouts/main/main.js";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Nav/>
       <Routes>
        <Route path="/" element={<Main/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
