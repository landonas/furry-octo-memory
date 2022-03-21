import React from "react";
 
const NewGoal = props => {
    let enteredText = '';
        const addGoalHandler = event => {
            event.preventDefault();

            const newGoal ={
               

                id: Math.random().toString(),
                "message" : enteredText

            };
        console.log(newGoal);
        props.onAddGoal(newGoal);//holds pointer to function, funciton 
        //pass has arugment to newGoal (above) param
        
        };

        const textChangeHandler = event => {
           enteredText = event.target.value;
        };
    
    return(
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" onChange={textChangeHandler}/>
            <button type="submit">Add Data</button>
        </form>

    );
};

export default NewGoal;