import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SelectTeam from './components/SelectTeam';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SelectDisplay from './components/SelectDisplay';
import PlayersOnField from './components/PlayersonField';
import PlayersOnBench from './components/PlayersonBench';
import YourTeam from './components/YourTeam';
import About from './components/About';
import Login from './components/Login';
import logo from './Images/logo.PNG';
import dilogo from './Images/dilogo.jpg';
import Modal from './components/Modal';
import Home from './components/Home';
import Homebis from './components/Homebis';

// import UseToken from './components/UseToken';
// import ErrorBoundary from './components/ErrorBoundary';


// Creating all Premier League Teams, with id, name, color and logo.
const listTeams = [
  { id: 1, teamName: "Arsenal", color: "#EB302E", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/arsenal.png" },
  { id: 2, teamName: "Aston Villa", color: "#480025", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/astonvilla.png" },
  { id: 3, teamName: "Brighton", color: "#0054A6", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/brighton.png" },
  { id: 4, teamName: "Burnley", color: "#6A003A", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/burnley.png" },
  { id: 5, teamName: "Chelsea", color: "#0A4595", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/chelsea.png" },
  { id: 6, teamName: "Crystal Palace", color: "#EB302E", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/palace.png" },
  { id: 7, teamName: "Everton", color: "#00369C", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/everton.png" },
  { id: 8, teamName: "Fulham", color: "#F5F5F5", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/fulham.png" },
  { id: 10, teamName: "Leeds", color: "#F5F5F5", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/leeds.png" },
  { id: 9, teamName: "Leicester", color: "#273E8A", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/leicester.png" },
  { id: 11, teamName: "Liverpool", color: "#E31B23", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/liverpool.png" },
  { id: 12, teamName: "Manchester City", color: "#6CAEE0", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/mancity.png" },
  { id: 13, teamName: "Manchester United", color: "#D81920", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/manutd.png" },
  { id: 14, teamName: "Newcastle", color: "#383838", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/newcastle.png" },
  { id: 15, teamName: "Sheffield United", color: "#ED1C24", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/sheffield.png" },
  { id: 16, teamName: "Southampton", color: "#D71920", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/southampton.png" },
  { id: 17, teamName: "Tottenham", color: "#F5F5F5", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/spurs.png" },
  { id: 18, teamName: "West Bromwich Albion", color: "#F5F5F5", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/westbrom.png" },
  { id: 19, teamName: "West Ham", color: "#7D2C3B", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/westham.png" },
  { id: 20, teamName: "Wolverhampton", color: "#F9A01B", logo: "https://www.fantasy-coach.fr/wp-content/uploads/2020/08/wolves.png" }
];

//Creating all the fornations available
const formation = ["4-2-3-1", "4-3-2-1", "4-3-3", "4-4-2", "5-4-1", "5-3-2", "3-4-3", "3-5-2"];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.setPlayerNames = this.setPlayerNames.bind(this);
    this.state = {
      jerseyColor: 'red', //Jersey color
      team: '', //Team on screen
      idteam: '', //idof the team
      badge: logo, //logo of the team
      data: {}, //Fantasy Premier League API data fetched
      playersName: ['Goal',
        'Def1', 'Def2', 'Def3', 'Def4',
        'Mid1', 'Mid2', 'Mid3',
        'Mid4', 'Mid5', 'For1'], // Players Names on field
      benchName: [], // Players Names on bench, available for swaps
      display: '4-2-3-1', // Formation selected, here 4-2-3-1 by default
      displayFormation: ['line4-1 player defender',
        'line4-2 player defender',
        'line4-3 player defender',
        'line4-4 player defender',
        'line2-1 player defmidfielder',
        'line2-2 player defmidfielder',
        'line3-1 player offmidfielder',
        'line3-2 player offmidfielder',
        'line3-3 player offmidfielder',
        'line1-1 player forward'], // Using a CSS grid, all players will go to their right place
      disabled: false, //Used in case of late fetch
      page: 'real', //Used as condition for launching functions
      visibilityStatus: 'hidden', //Used to display or not components
      available: false, //Use for a button with two purposes
      buttonColor: '#24AB33', //color of this button
      availableText: "Exclude injured and suspended players", //Text of this button
      modalClasses: "overlay", // Pop Up for teams with less forwards available than requested on field
      token: false, //token with username and password
      corsModule: "overlay show",








    }
  }



  // Fetching all the players data from official FPL API
   componentDidMount() {
    
  fetch('https://thingproxy.freeboard.io/fetch/https://fantasy.premierleague.com/api/bootstrap-static/')
   .then(response => response.json())
 .then(playerData => this.setState({ data: playerData }))
   }



  // To update the token
  setToken = async (userToken) => {
    await this.setState({ token: JSON.stringify(userToken) });
  }

  // Reinitiate the real Teams page onClick
  realTeams = () => {
    this.setState({
      visibilityStatus: 'hidden', page: 'real', playersName: ['Goal',
        'Def1', 'Def2', 'Def3', 'Def4',
        'Mid1', 'Mid2', 'Mid3',
        'Mid4', 'Mid5', 'For1']
    });
  }

  // Initiate parameters for your Team page onClick
  yourTeam = () => {
    this.setState({
      visibilityStatus: 'hidden', benchName: [], page: 'your', jerseyColor: 'blue'
    })
  }

  // about = () => {

  // }

  // login = () => {
  //   // this.setState({ page: 'login' })

  // }

  showPlayers = (data) => {
    var YourTempPlayers = []
    data.map(t => YourTempPlayers.push(t.player_name))
    this.setState({ playersName: YourTempPlayers, badge: dilogo })
  }

  setPlayerNames = (arr) => {
    this.setState({ playersName: arr });
  }

  updateTeam = () => {
    let teamIdPlayer = 1;
    let playersNameTemp = this.state.playersName;
    let playerPost = {};
    let playerName = '';
    for (let playerId = 1; playerId <= playersNameTemp.length; playerId++) {
      playerName = playersNameTemp[playerId - 1];
      playerPost = { playerId, playerName, teamIdPlayer };
      fetch('http://localhost:8081/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(playerPost)

      })
    }
  };

  availablePlayers = async () => {
    switch (this.state.available) {
      case false:
        await this.setState({ available: true, availableText: "Include injured and suspended players", buttonColor: "red" })
        this.getPlayers();

        break;
      case true:
        await this.setState({ available: false, availableText: "Exclude injured and suspended players", buttonColor: "#24AB33" })
        this.getPlayers();

        break;
      default:
        break;
    }

  }

  changeDisplay = async (e) => {
    await this.setState({ display: e.target.value });
    switch (this.state.display) {
      case '4-2-3-1':
        this.setState({
          displayFormation: ['line4-1 player defender',
            'line4-2 player defender',
            'line4-3 player defender',
            'line4-4 player defender',
            'line2-1 player defmidfielder',
            'line2-2 player defmidfielder',
            'line3-1 player offmidfielder',
            'line3-2 player offmidfielder',
            'line3-3 player offmidfielder',
            'line1-1 player forward'],

        })
        break;
      case '4-3-2-1':
        this.setState({
          displayFormation: ['line4-1 player defender',
            'line4-2 player defender',
            'line4-3 player defender',
            'line4-4 player defender',
            'line3-1 player defmidfielder',
            'line3-2 player defmidfielder',
            'line3-3 player defmidfielder',
            'line2-1 player offmidfielder',
            'line2-2 player offmidfielder',
            'line1-1 player forward'],
        })
        break;
      case '4-3-3':
        this.setState({
          displayFormation: ['line4-1 player defender',
            'line4-2 player defender',
            'line4-3 player defender',
            'line4-4 player defender',
            'line3-1 player midfielder',
            'line3-2 player midfielder',
            'line3-3 player midfielder',
            'line3-1 player forward',
            'line3-2 player forward',
            'line3-3 player forward'],
        })
        break;
      case '4-4-2':
        this.setState({
          displayFormation: ['line4-1 player defender',
            'line4-2 player defender',
            'line4-3 player defender',
            'line4-4 player defender',
            'line4-1 player midfielder',
            'line4-2 player midfielder',
            'line4-3 player midfielder',
            'line4-4 player midfielder',
            'line2-1 player forward',
            'line2-2 player forward'],

        })
        break;
      case '5-4-1':
        this.setState({
          displayFormation: ['line5-1 player defender',
            'line5-2 player defender',
            'line5-3 player defender',
            'line5-4 player defender',
            'line5-5 player defender',
            'line4-1 player midfielder',
            'line4-2 player midfielder',
            'line4-3 player midfielder',
            'line4-4 player midfielder',
            'line1-1 player forward'],
        })
        break;
      case '5-3-2':
        this.setState({
          displayFormation: ['line5-1 player defender',
            'line5-2 player defender',
            'line5-3 player defender',
            'line5-4 player defender',
            'line5-5 player defender',
            'line3-1 player midfielder',
            'line3-2 player midfielder',
            'line3-3 player midfielder',
            'line2-1 player forward',
            'line2-2 player forward'],

        })
        break;
      case '3-5-2':
        this.setState({
          displayFormation: ['line3-1 player defender',
            'line3-2 player defender',
            'line3-3 player defender',
            'line5-1 player midfielder',
            'line5-2 player midfielder',
            'line5-3 player midfielder',
            'line5-4 player midfielder',
            'line5-5 player midfielder',
            'line2-1 player forward',
            'line2-2 player forward'],

        })
        break;
      case '3-4-3':
        this.setState({
          displayFormation: ['line3-1 player defender',
            'line3-2 player defender',
            'line3-3 player defender',
            'line4-1 player midfielder',
            'line4-2 player midfielder',
            'line4-3 player midfielder',
            'line4-4 player midfielder',
            'line3-1 player forward',
            'line3-2 player forward',
            'line3-3 player forward'],
        })
        break;
      default:
        break;
    }

    if (this.state.page === 'real') {
      this.getPlayers();
    }


  }

  setTeam = async (e) => {
    const teamPicked = [...listTeams].find(t => t.teamName === e.target.value);
    try {
      await this.setState({ team: teamPicked.teamName, jerseyColor: teamPicked.color, idteam: teamPicked.id, badge: teamPicked.logo });
    }
    catch (err) { console.log("Sorry for the inconvenience") }


    this.getPlayers();
  }

  closeModal = () => {
    this.setState({ modalClasses: "overlay", corsModule: 'overlay' })
  }


  getPlayers = () => {
    // Filter through list of all players to get the players of the team who are not injured
    // const playersTeam = this.state.data.elements.filter(t => t.team === this.state.idteam && t.chance_of_playing_this_round === 100 && t.status === 'a');
    const playersTeam = (this.state.available) ? this.state.data.elements.filter(t => t.team === this.state.idteam && t.status === 'a') : this.state.data.elements.filter(t => t.team === this.state.idteam);
    // // // Get only the best goalkeeper
    const goalKeeperList = playersTeam.filter(t => t.element_type === 1);
    goalKeeperList.sort(function (a, b) { return parseFloat(b.now_cost) - parseFloat(a.now_cost) });
    const defenderList = playersTeam.filter(t => t.element_type === 2);
    defenderList.sort(function (a, b) { return parseFloat(b.now_cost) - parseFloat(a.now_cost) });
    const midfielderList = playersTeam.filter(t => t.element_type === 3);
    midfielderList.sort(function (a, b) { return parseFloat(b.now_cost) - parseFloat(a.now_cost) });
    const forwardList = playersTeam.filter(t => t.element_type === 4);
    forwardList.sort(function (a, b) { return parseFloat(b.now_cost) - parseFloat(a.now_cost) });



    const displayUse = this.state.display;
    var playersTemp = [];
    switch (displayUse) {
      case '4-3-3':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : '',
        forwardList[1] ? [forwardList[1].web_name, forwardList[0].element_type] : '',
        forwardList[2] ? [forwardList[2].web_name, forwardList[0].element_type] : ''];
        break;
      case '4-3-2-1':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        midfielderList[4] ? [midfielderList[4].web_name, midfielderList[4].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : ''];
        break;
      case '4-2-3-1':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        midfielderList[4] ? [midfielderList[4].web_name, midfielderList[4].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : ''];
        break;
      case '4-4-2':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : '',
        forwardList[1] ? [forwardList[1].web_name, forwardList[0].element_type] : ''];
        break;
      case '5-4-1':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        defenderList[4] ? [defenderList[4].web_name, defenderList[4].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : ''];
        break;
      case '5-3-2':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        defenderList[3] ? [defenderList[3].web_name, defenderList[3].element_type] : '',
        defenderList[4] ? [defenderList[4].web_name, defenderList[4].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : '',
        forwardList[1] ? [forwardList[1].web_name, forwardList[0].element_type] : ''];
        break;
      case '3-4-3':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : '',
        forwardList[1] ? [forwardList[1].web_name, forwardList[0].element_type] : '',
        forwardList[2] ? [forwardList[2].web_name, forwardList[0].element_type] : ''];
        break;
      case '3-5-2':
        playersTemp = [goalKeeperList[0] ? [goalKeeperList[0].web_name, goalKeeperList[0].element_type] : '',
        defenderList[0] ? [defenderList[0].web_name, defenderList[0].element_type] : '',
        defenderList[1] ? [defenderList[1].web_name, defenderList[1].element_type] : '',
        defenderList[2] ? [defenderList[2].web_name, defenderList[2].element_type] : '',
        midfielderList[0] ? [midfielderList[0].web_name, midfielderList[0].element_type] : '',
        midfielderList[1] ? [midfielderList[1].web_name, midfielderList[1].element_type] : '',
        midfielderList[2] ? [midfielderList[2].web_name, midfielderList[2].element_type] : '',
        midfielderList[3] ? [midfielderList[3].web_name, midfielderList[3].element_type] : '',
        midfielderList[4] ? [midfielderList[4].web_name, midfielderList[4].element_type] : '',
        forwardList[0] ? [forwardList[0].web_name, forwardList[0].element_type] : '',
        forwardList[1] ? [forwardList[1].web_name, forwardList[0].element_type] : ''];
        break;
      default:
        break;
    }



    const bench = playersTeam.filter(t => !playersTemp.flat().includes(t.web_name));
    bench.sort(function (a, b) { return parseFloat(a.element_type) - parseFloat(b.element_type) });
    var benchnames = [];
    for (var i = 0; i < bench.length; i++) {
      benchnames.push(bench[i] ? [bench[i].web_name, bench[i].element_type] : '');
    }

    this.setState({ playersName: playersTemp, benchName: benchnames, visibilityStatus: 'visible' });

    if (forwardList.length < displayUse.substr(-1)) { this.setState({ modalClasses: "show overlay" }) }



  }




  render() {

    const { displayFormation, jerseyColor, playersName, benchName, team, badge, token, visibilityStatus, buttonColor, availableText, modalClasses, corsModule } = this.state;

    // <UseToken/>
    if (!token) {
      return <>
        <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} about={this.about} login={this.login} token={token} />
        {/* <div id='noCors' className={corsModule}>
          <div className="popup">
            <div className="close" onClick={this.closeModal}>×</div>
            <h2>Warning</h2>
            <div className="content-1">In order to get data from FPL without installing extension,<br />
             you will have to ask for temporary access by visiting this website :<br />
              <a id='corsLink' href="https://cors-anywhere.herokuapp.com/corsdemo">NO CORS</a> <br />
             and refresh the page, sorry for the inconvenience
          </div>
          </div>
        </div> */}
        <Login setToken={this.setToken} />

        <Home token={token} />
        <Footer />
      </>
    }

    return (
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" >
              <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} about={this.about} login={this.login} token={token} />
              <Home token={token} />
              <Homebis />
              <Footer />
            </Route>
            <Route path="/realTeams">
              <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} about={this.about} login={this.login} token={token} />


              <div id='container'>
                <Modal modalClasses={modalClasses} closeModal={this.closeModal} />
                <div id='leftSide'>
                  <SelectTeam listTeams={listTeams} setTeam={this.setTeam} disabled={this.state.data.elements ? false : true} />
                  <br />
                  <SelectDisplay formation={formation} changeDisplay={this.changeDisplay} />
                  <button type="button" id='available' style={{ visibility: visibilityStatus, backgroundColor: buttonColor }} onClick={this.availablePlayers}>{availableText}</button>
                  <PlayersOnField visibilityStatus={visibilityStatus} playersName={playersName} team={team} />
                </div>
                <div id='field'>

                  <div id='goal' className='player'><i id='player goalKeeper' style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='goalName'>{playersName[0][0]}</p></div>
                  <div className={displayFormation[0]}><i id='player2' style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def1Name'>{playersName[1][0]}</p></div>
                  <div className={displayFormation[1]}><i id='player3' style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def2Name'>{playersName[2][0]}</p></div>
                  <div className={displayFormation[2]}><i id='player4' style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def3Name'>{playersName[3][0]}</p></div>
                  <div className={displayFormation[3]}><i id='player5' style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def4Name'>{playersName[4][0]}</p></div>
                  <div className={displayFormation[4]}><i id='player6' style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid1Name'>{playersName[5][0]}</p></div>
                  <div className={displayFormation[5]}><i id='player7' style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid2Name'>{playersName[6][0]}</p></div>
                  <div className={displayFormation[6]}><i id='player8' style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid3Name'>{playersName[7][0]}</p></div>
                  <div className={displayFormation[7]}><i id='player9' style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for1Name'>{playersName[8][0]}</p></div>
                  <div className={displayFormation[8]}><i id='player10' style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for2Name'>{playersName[9][0]}</p></div>
                  <div className={displayFormation[9]}><i id='player11' style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for3Name'>{playersName[10][0]}</p></div>
                  <img id='badgeDisplay' src={badge} alt='badge'></img>
                </div>
                <div id='rightSide'>
                  {/* <div id='noCorsTeam'>In order to get data from FPL, you will have to ask for temporary access <a href="https://cors-anywhere.herokuapp.com/corsdemo">Here</a></div> */}
                  <PlayersOnBench visibilityStatus={visibilityStatus} id='playersOnBench1' benchName={benchName} />
                </div>
              </div>
              <Footer />
            </Route>
            <Route path="/yourTeam">

              <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} about={this.about} login={this.login} token={token} />


              <div id='container'>
                <div id='leftSide'>
                  <SelectDisplay formation={formation} changeDisplay={this.changeDisplay} />
                  <YourTeam visibilityStatus={visibilityStatus} playersName={playersName} team={team} setPlayerNames={this.setPlayerNames} showPlayers={this.showPlayers} />
                </div>
                <div id='field'>

                  <div id='goal' className='player'><i style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='goalName'>{playersName[0]}</p></div>
                  <div className={displayFormation[0]}><i style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def1Name'>{playersName[1]}</p></div>
                  <div className={displayFormation[1]}><i style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def2Name'>{playersName[2]}</p></div>
                  <div className={displayFormation[2]}><i style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def3Name'>{playersName[3]}</p></div>
                  <div className={displayFormation[3]}><i style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def4Name'>{playersName[4]}</p></div>
                  <div className={displayFormation[4]}><i style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid1Name'>{playersName[5]}</p></div>
                  <div className={displayFormation[5]}><i style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid2Name'>{playersName[6]}</p></div>
                  <div className={displayFormation[6]}><i style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid3Name'>{playersName[7]}</p></div>
                  <div className={displayFormation[7]}><i style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for1Name'>{playersName[8]}</p></div>
                  <div className={displayFormation[8]}><i style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for2Name'>{playersName[9]}</p></div>
                  <div className={displayFormation[9]}><i style={{ color: jerseyColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for3Name'>{playersName[10]}</p></div>
                  <img id='badgeDisplay' src={badge} alt='badge'></img>
                </div>
                <div id='rightSide'>

                  <PlayersOnBench visibilityStatus={visibilityStatus} id='playersOnBench1' benchName={benchName} />
                  <button id='saveButton' onClick={this.updateTeam}>Save your team</button>
                </div>
              </div>
              <Footer />
            </Route>
            <Route path="/about">
              <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} about={this.about} login={this.login} token={token} />
              <About />

              <Footer />
            </Route>
            <Route path="/login">
              <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} about={this.about} login={this.login} />
              <Login setToken={this.setToken} />

              <Footer />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>)
  }
}

export default App;
