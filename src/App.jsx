import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import UserRegister from './pages/UserRegister';
import CreateTimeTable from './pages/CreateTimeTable';
import ErrorPage from './pages/ErrorPage';
import TimeTable from './pages/TimeTable';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<LoginScreen />} />
        <Route path='/LoginScreen' element = {<LoginScreen/>} />
        <Route path='/UserRegister' element = {<UserRegister/>} />
        <Route path='/TimeTable' element = {<TimeTable/>} />
        <Route path='/CreateTimeTable' element = {<CreateTimeTable/>} />
        <Route path='*' element = {<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App