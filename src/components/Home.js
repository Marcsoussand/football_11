import '../CSS/Home.css';
import exampleReal from '../Images/exampleReal.PNG';
import exampleReal2 from '../Images/exampleReal2.PNG';
import yourTeam from '../Images/yourTeam.PNG';
import yourTeam2 from '../Images/yourTeam2.PNG';


const Home = (props) => {
    const {token} =props;
    console.log(token);
    // const user = token.parse.;
return(
    <div>
    <h1>Welcome {JSON.parse(token).username}</h1>
<div id='homeContainer'>
    <div className='Card'><h3>Real Teams</h3><div id='crossFade' ><img src={exampleReal} alt='example1'></img><img className='top' src={exampleReal2} alt='example1'></img></div>
    <p>You may display real Premier League teams, with updated injured and suspended players</p> </div>
        <div className='Card'><h3>Your Team</h3><div id='crossFade' ><img  src={yourTeam} alt='yt1'></img><img className="top" src={yourTeam2} alt='yt2'></img></div>
        <p>You may display in various tactics your own Team, store and update them on our database  </p> </div>
        
     </div>
     

    </div>
)
}

export default Home;