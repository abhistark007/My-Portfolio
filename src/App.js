import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
