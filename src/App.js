import logo from './logo.svg';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './shared/components/Navigation/Navbar';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import Items from './components/items/pages/Items';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App =()=>{ 
  //creates a hook; always has two params, initial state, setState
  const [courseGoals, setCourseGoals] = useState([ 
    {id:"cg1", "message":"first item"}, //goal
    {id:"cg2", "message":"second item"}, //goal
    {id:"cg3", "message":"third item"}, //goal  
  ]);




  // method using hooks to update state
  const addNewGoalHandler = NewGoal => {
    //setCourseGoals(courseGoals.concat(NewGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(NewGoal);
    });
  };


  /*
    GoalList uses props to pass data from child to parent
    NewGoal will pass data from parent to child via callback function
  */
  return(
      <Router>
      <MainNavigation/>
        <Switch>
        <Route path="/Add" exact>
          <NewGoal onAddGoal={addNewGoalHandler}/>  
          <GoalList goals={courseGoals} />
        </Route>
        <Route path="/Items" exact>
          <Items/>
        </Route>
        <Redirect to="/"/>
        </Switch>
      </Router>
  );
};

export default App;
