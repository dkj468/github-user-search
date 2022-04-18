import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';

function App() {
  return (
        <AuthWrapper>
        <Routes>
          <Route path='/' exact element={
            <PrivateRoute><Dashboard/></PrivateRoute>
          }/>
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<Error />} />
        </Routes>
        </AuthWrapper>
  );
}

export default App;
