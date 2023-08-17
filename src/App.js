import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dash from './Components/Dash';
import Add from './Components/Add';
import List from './Components/List';
import { useState } from 'react';
import Todocontext from './Components/Context/Todocontext'
import Edit from './Components/Edit';

function App() {
  const [allData, setAlldata] = useState([])
  return (
    <>

      <BrowserRouter>
        <Todocontext.Provider value={ { allData, setAlldata } }>
          <Routes>
            <Route path='/' element={ <Dash /> } />
            <Route path='/add' element={ <Add /> } />
            <Route path='/list' element={ <List /> } />
            <Route path='/edit/:id' element={ <Edit /> } />
          </Routes>
        </Todocontext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
