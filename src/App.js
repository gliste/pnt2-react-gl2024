import UserList from './components/User/UserList';
import './App.css';
import UserPage from './components/User/UserPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserDetails from "./components/User/UserDetails";

//TODO: Lo ideal es que cuando utilice el componente UserList
//le pase como props el array de usuarios <UserList Users=array />

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path= "/" element = {<h1>Home</h1>} />
          <Route path= "/users" element = {<UserPage />} />
          <Route path= "/users/:id" element = {<UserDetails/>} />

        </Routes>
      </BrowserRouter>
    
    
  );
}

export default App;
