import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Cars from './pages/cars/cars.component';
import NewCar from './pages/new car/new-car.component';
import EditCar from './pages/edit-car/edit-car.component';
// import { useState } from 'react';
import {Route , Switch} from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <h1 className="header">Car Shop</h1>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cars' component={Cars} />
        <Route exact path='/cars/new' component={NewCar} />
        <Route exact path='/cars/edit/:id' component={EditCar} />
      </Switch>
        
    </div>
  );
}

export default App;
