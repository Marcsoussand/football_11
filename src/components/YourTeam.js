import React from 'react';

class YourTeam extends React.Component {
    constructor(props) {
        super(props);
        this.setPlayer = this.setPlayer.bind(this)
    };

    async componentDidMount() {
        await fetch('http://localhost:8081/show')
            .then(res => res.json())
            .then(data => {
                this.props.showPlayers(data)
            }
            )
    }



    setPlayer(playersTemp2) {
        this.props.setPlayerNames(playersTemp2);
    }

    render() {


        var playersTemp2 = [];
        const playersName = this.props.playersName;

        return (
            <>

                <ul style={{ visibility: 'visible' }} id='playersOnField1'>
                    <h3 style={{ textAlign: "center", color: "gold" }} >Players </h3>
                    {playersName.map((item, i) => {
                        playersTemp2.push(item);
                        return <li key={i} className='playerListDesign'><div>Player {i + 1}</div><input type="text" className='inputPlayers'  onChange={event => { playersTemp2[i] = event.target.value; this.setPlayer(playersTemp2); console.log(playersTemp2); }} /> </li>
                    })}
                </ul>
            </>
        )

    }
}

export default YourTeam

// id={nameInput(i)}