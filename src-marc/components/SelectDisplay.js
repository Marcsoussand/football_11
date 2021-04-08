import React from 'react';

const SelectDisplay = (props) =>{

    let {formation, changeDisplay} = props;

    
    
    

    // console.log("First :",{color,team});  

    

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
