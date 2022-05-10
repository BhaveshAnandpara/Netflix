import './style.css';
import Navbar from './Components/Navbar/Navbar';
import Featured from './Components/Featured/Featured';
import List from './Components/List/List';
import Watch from './Pages/VideoPlayer/VideoPlayer';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/register';
import Login from './Pages/Login/Login';

import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import VideoPlayer from './Pages/VideoPlayer/VideoPlayer';

function App() {

  const user = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ user ? <Home/> : <Navigate to="/register"/>}></Route>
        <Route exact path="/register" element={ !user ?  <Register/> : <Navigate to="/" /> }></Route>
        <Route exact path="/login" element={ !user ?  <Login/> : <Navigate to="/" /> }></Route>
        {
          user && (
        <>
        <Route exact path="/movies" element={<Home type="movie" />}></Route>
        <Route exact path="/series" element={<Home type="series" />}></Route>
        <Route exact path="/watch" element={<Watch />}></Route>
        </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
