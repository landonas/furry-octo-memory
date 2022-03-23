import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App =()=>{ 
  //creates a hook; always has two params, initial state, setState
  const [courseGoals, setCourseGoals] = useState([ 
    {id:"cg1", "message":"first course goal"}, //goal
    {id:"cg2", "message":"second course goal"}, //goal
    {id:"cg3", "message":"third course goal"}, //goal  
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
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>  
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
