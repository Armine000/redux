
import './App.css';
import Create from "./create";
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './Update';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/create' element={<Create/>}></Route>
  <Route path='/edit/:id' element={<Update/>}></Route>
</Routes>
</BrowserRouter>
  );
}
export default App;
