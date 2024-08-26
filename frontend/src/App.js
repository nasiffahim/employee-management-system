import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import User from './User';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />}></Route>
          <Route path='/create' element={<CreateUser />}></Route>
          <Route path='/edit' element={<EditUser />}></Route>
        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
