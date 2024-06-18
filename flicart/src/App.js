
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './component/Register';
import Login from './component/Login';




export const config={
  endpoint:`https://qkart-123-pil7.onrender.com/api/v1`
}
function App() {

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
