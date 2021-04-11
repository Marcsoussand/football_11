

// Bench : List of all players on squad which are not on Field, 

const PlayersOnBench = (props) => {

    let { benchName, visibilityStatus } = props;
    var position = '';

    return (

        <div style={{ visibility: visibilityStatus }}> Other Players Available
            <ul id='bench'>
                {benchName.map((item, i) => {
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

                    return <li key={i}>{position} {item[0]}</li>
                })}
            </ul>
        </div>

    )

}

export default PlayersOnBench