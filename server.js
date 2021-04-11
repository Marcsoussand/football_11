const exp = require('express');
const bp = require('body-parser');
const knex = require('knex');
const cors = require('cors')


const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'Tel1avi,',
    database: 'Players'
  }
})
const app = exp();

app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use('/', exp.static(__dirname + '/public'));


app.get('/show', (req, res) => {
  db('players')
    .orderBy('player_id')
    .select('player_id', 'player_name', 'team_id_player')
    .then(data => {
      console.log(data);
      res.send(data)
    })
    .catch(err => {
      console.log(err);
      res.send({ message: err.detail })
    })
})

app.post('/post', (req, res) => {
  console.log(req.body);
  changePlayer(req.body)
    .then(data => {
      res.send({ message: 'OK' })
    })
    .catch(err => {
      res.send({ message: err.detail })
    })
})

function changePlayer({ playerId, playerName, teamIdPlayer }) {
  return db('players')
    .where({ player_id: playerId, team_id_player: teamIdPlayer })
    .update({ player_name: playerName })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
      res.send({ message: err.detail })
    })
}

app.listen(8081, () => console.log('API is running on http://localhost:8081/'));
