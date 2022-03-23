import React, {useState} from "react";
 
const NewGoal = props => {
    //let enteredText = '';
    const [enteredText, setEnteredText] = useState('');
    
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal ={

        id: Math.random().toString(),
        "message" : enteredText,
        number : 22
        
    };
        console.log(newGoal.number)
        setEnteredText('');
        //holds pointer to function, funciton 
        //pass has arugment to newGoal (above) param
        props.onAddGoal(newGoal);
        };

        const textChangeHandler = event => {
            setEnteredText(event.target.value);
        };
    
    return(
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler}/>
            <button type="submit">Add Data</button>
        </form>

    );
};

export default NewGoal;