import React from 'react';

// Display selector, which tactic do you want to use
// Used for both pages realTeams and yourTeam

const SelectDisplay = (props) =>{

    let {formation, changeDisplay} = props;

return (
    <>
    <label htmlFor="myDisplay">Change formation : </label>
    <select id='myDisplay' className="selector" onChange={changeDisplay}>
        {formation.map((item,i) => {

            return <option id={item} key={i} value={item} >{item}</option>})}
    </select>
    </>
)
}

export default SelectDisplay;
