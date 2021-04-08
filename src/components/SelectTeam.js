import React from 'react';
// import {connect} from 'react-redux';
// import {changeColor} from '../Actions/index.js';



const SelectTeam = (props) =>{

    let {listTeams, setTeam,disabled} = props;



    // console.log("First :",{color,team});



return (
    <>
    <label htmlFor="mySelect">Choose your team : </label>
    {/* <select id='mySelect' className="selector" onChange={changeColor} disabled={disabled} > */}
    <select id='mySelect' className="selector" onChange={setTeam} disabled={disabled}>
        <option>Premier League Teams</option>
        {listTeams.map((item,i) => {

            return <option id={item.teamName} key={i} value={item.teamName} >{item.teamName}</option>})}
    </select>
    </>
)
}

// const mapStateToProps = (state) => {

// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleSearch: (e) => dispatch(change(e.target.value))
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(SelectTeam);

export default SelectTeam;
