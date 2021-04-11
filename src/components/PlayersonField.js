

// 11 Players who are displayed on Field
// Data coming from playersName, component used for both pages realTeams and yourTeam

const PlayersOnField = (props) => {

    let { playersName, visibilityStatus } = props;
    var position = '';
    return (
        <>

            <ul id='playersOnField1' style={{ visibility: visibilityStatus }}>
                <p id='playersTitle'>Players </p>
                {playersName.map((item, i) => {
                    switch (item[1]) {
                        case 1:
                            position = 'G'
                            break;
                        case 2:
                            position = 'D';
                            break;
                        case 3:
                            position = 'M';
                            break;
                        case 4:
                            position = 'F';
                            break;
                        default:
                            break;
                    };


                    return <li key={i}>{position} {item[0]}  </li>
                })}
            </ul>
        </>
    )

}

export default PlayersOnField