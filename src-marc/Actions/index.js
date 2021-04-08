
    switch (page) {
        case 'real':
          return (
            <>
              <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} about={this.about} login={this.login}/>
  
  
              <div id='container'>
                <Modal modalClasses={modalClasses} closeModal={this.closeModal}/>
                <div id='leftSide'>
                  <SelectTeam listTeams={listTeams} setTeam={this.setTeam} disabled={this.state.data.elements ? false : true} />
                  <br />
                  <SelectDisplay formation={formation} changeDisplay={this.changeDisplay} />
                  <button type="button" id='available' style={{visibility:visibilityStatus}} onClick={this.availablePlayers}>{availableText}</button>
                  <PlayersOnField visibilityStatus={visibilityStatus} playersName={playersName} team={team} />
                </div>
                <div id='field'>
  
                  <div id='goal' className='player'><i id='player goalKeeper' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='goalName'>{playersName[0][0]}</p></div>
                  <div className={displayFormation[0]}><i id='player2' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def1Name'>{playersName[1][0]}</p></div>
                  <div className={displayFormation[1]}><i id='player3' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def2Name'>{playersName[2][0]}</p></div>
                  <div className={displayFormation[2]}><i id='player4' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def3Name'>{playersName[3][0]}</p></div>
                  <div className={displayFormation[3]}><i id='player5' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def4Name'>{playersName[4][0]}</p></div>
                  <div className={displayFormation[4]}><i id='player6' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid1Name'>{playersName[5][0]}</p></div>
                  <div className={displayFormation[5]}><i id='player7' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid2Name'>{playersName[6][0]}</p></div>
                  <div className={displayFormation[6]}><i id='player8' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid3Name'>{playersName[7][0]}</p></div>
                  <div className={displayFormation[7]}><i id='player9' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for1Name'>{playersName[8][0]}</p></div>
                  <div className={displayFormation[8]}><i id='player10' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for2Name'>{playersName[9][0]}</p></div>
                  <div className={displayFormation[9]}><i id='player11' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for3Name'>{playersName[10][0]}</p></div>
                  <img id='badgeDisplay' src={badge} alt='badge'></img>
                </div>
                <div id='rightSide'>
  
                  <PlayersOnBench visibilityStatus={visibilityStatus} id='playersOnBench1' benchName={benchName} />
                  <button id='saveButton'>Save your team</button>
                </div>
              </div>
              <Footer />
            </>
  
          )
  
        case 'your':
          return (
            <>
               <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} about={this.about} login={this.login}/>
  
  
              <div id='container'>
                <div id='leftSide'>
                  <SelectDisplay formation={formation} changeDisplay={this.changeDisplay} />
                  <YourTeam visibilityStatus={visibilityStatus} playersName={playersName} team={team} setPlayerNames={this.setPlayerNames}/>
                </div>
                <div id='field'>
  
                  <div id='goal' className='player'><i id='player goalKeeper' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='goalName'>{playersName[0][0]}</p></div>
                  <div className={displayFormation[0]}><i id='player2' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def1Name'>{playersName[1][0]}</p></div>
                  <div className={displayFormation[1]}><i id='player3' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def2Name'>{playersName[2][0]}</p></div>
                  <div className={displayFormation[2]}><i id='player4' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def3Name'>{playersName[3][0]}</p></div>
                  <div className={displayFormation[3]}><i id='player5' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='def4Name'>{playersName[4][0]}</p></div>
                  <div className={displayFormation[4]}><i id='player6' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid1Name'>{playersName[5][0]}</p></div>
                  <div className={displayFormation[5]}><i id='player7' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid2Name'>{playersName[6][0]}</p></div>
                  <div className={displayFormation[6]}><i id='player8' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='mid3Name'>{playersName[7][0]}</p></div>
                  <div className={displayFormation[7]}><i id='player9' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for1Name'>{playersName[8][0]}</p></div>
                  <div className={displayFormation[8]}><i id='player10' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for2Name'>{playersName[9][0]}</p></div>
                  <div className={displayFormation[9]}><i id='player11' style={{ color: backgroundColor }} className="fas fa-tshirt fa-3x"></i><p className='playerDisplay' id='for3Name'>{playersName[10][0]}</p></div>
                  <img id='badgeDisplay' src={badge} alt='badge'></img>
                </div>
                <div id='rightSide'>
  
                  <PlayersOnBench visibilityStatus={visibilityStatus} id='playersOnBench1' benchName={benchName} />
                  <button id='saveButton'>Save your team</button>
                </div>
              </div>
              <Footer />
            </>
  
          )
  
        case 'about':
          return (
            <>
               <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} about={this.about} login={this.login}/>
              <About />
  
              <Footer />
  
            </>
          )
  case 'login':
    return (
      <>
       <Navbar realTeams={this.realTeams} yourTeam={this.yourTeam} about={this.about} login={this.login}/>
      <Login />
      <Footer />
      </>
    )
  
        default:
          break;
      }
  
  
    }
  
  }