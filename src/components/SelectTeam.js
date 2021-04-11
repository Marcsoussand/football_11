import React from 'react';

// Team Selector component, will update name, logo, color
// Only for real Teams

const SelectTeam = (props) =>{

    let {listTeams, setTeam,disabled} = props;

return (
    <>
    <label htmlFor="mySelect">Choose your team : </label>
    <select id='mySelect' className="selector" onChange={setTeam} disabled={disabled}>
        <option>Premier League Teams</option>
        {listTeams.map((item,i) => {

            return <option id={item.teamName} key={i} value={item.teamName} >{item.teamName}</option>})}
    </select>
    </>
)
}

export default SelectTeam;
