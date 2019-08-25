import React, {Component} from "react";
import PlayerList from './PlayerList/PlayerList';
import styles from './TeamDetails.module.css'

class TeamDetails extends Component {
  state = {
    teamInfo: {
    "id" : 141,
    "name" : "Toronto Blue Jays",
    "link" : "/api/v1/teams/141",
    "venue" : {
      "id" : 14,
      "name" : "Rogers Centre",
      "link" : "/api/v1/venues/14"
    },
    "teamCode" : "tor",
    "fileCode" : "tor",
    "abbreviation" : "TOR",
    "teamName" : "Blue Jays",
    "locationName" : "Toronto",
    "firstYearOfPlay" : "1977",
    "league" : {
      "id" : 103,
      "name" : "American League",
      "link" : "/api/v1/league/103"
    },
    "division" : {
      "id" : 201,
      "name" : "American League East",
      "link" : "/api/v1/divisions/201"
    },
    "sport" : {
      "id" : 1,
      "link" : "/api/v1/sports/1",
      "name" : "Major League Baseball"
    },
    "shortName" : "Toronto",
    "springLeague" : {
      "id" : 115,
      "name" : "Grapefruit League",
      "link" : "/api/v1/league/115",
      "abbreviation" : "GL"
    },
    "allStarStatus" : "N",
    "active" : true
  },
    pitchers: [
      {
          "person" : {
            "id" : 641856,
            "fullName" : "Billy McKinney",
            "link" : "/api/v1/people/641856",
            "firstName" : "William",
            "lastName" : "McKinney",
            "primaryNumber" : "28",
            "birthDate" : "1994-08-23",
            "currentAge" : 25,
            "birthCity" : "Dallas",
            "birthStateProvince" : "TX",
            "birthCountry" : "USA",
            "height" : "6' 1",
            "weight" : 205,
            "active" : true,
            "primaryPosition" : {
              "code" : "7",
              "name" : "Outfielder",
              "type" : "Outfielder",
              "abbreviation" : "LF"
            },
            "useName" : "Billy",
            "middleName" : "Landis",
            "boxscoreName" : "McKinney",
            "gender" : "M",
            "isPlayer" : true,
            "isVerified" : true,
            "draftYear" : 2013,
            "stats" : [ {
              "type" : {
                "displayName" : "season"
              },
              "group" : {
                "displayName" : "hitting"
              },
              "exemptions" : [ ],
              "splits" : [ {
                "season" : "2019",
                "stat" : {
                  "gamesPlayed" : 62,
                  "groundOuts" : 50,
                  "runs" : 29,
                  "doubles" : 12,
                  "triples" : 1,
                  "homeRuns" : 9,
                  "strikeOuts" : 55,
                  "baseOnBalls" : 13,
                  "intentionalWalks" : 0,
                  "hits" : 45,
                  "hitByPitch" : 2,
                  "avg" : ".223",
                  "atBats" : 202,
                  "obp" : ".275",
                  "slg" : ".426",
                  "ops" : ".701",
                  "caughtStealing" : 2,
                  "stolenBases" : 0,
                  "stolenBasePercentage" : ".000",
                  "groundIntoDoublePlay" : 0,
                  "numberOfPitches" : 809,
                  "plateAppearances" : 220,
                  "totalBases" : 86,
                  "rbi" : 21,
                  "leftOnBase" : 66,
                  "sacBunts" : 2,
                  "sacFlies" : 1,
                  "babip" : ".259",
                  "groundOutsToAirouts" : "0.91",
                  "atBatsPerHomeRun" : "22.44"
                },
                "team" : {
                  "id" : 141,
                  "name" : "Toronto Blue Jays",
                  "link" : "/api/v1/teams/141"
                },
                "league" : {
                  "id" : 103,
                  "name" : "American League",
                  "link" : "/api/v1/league/103"
                },
                "gameType" : "R"
              } ]
            } ],
            "mlbDebutDate" : "2018-03-30",
            "batSide" : {
              "code" : "L",
              "description" : "Left"
            },
            "pitchHand" : {
              "code" : "L",
              "description" : "Left"
            },
            "nameFirstLast" : "Billy McKinney",
            "nameSlug" : "billy-mckinney-641856",
            "firstLastName" : "Billy McKinney",
            "lastFirstName" : "McKinney, Billy",
            "lastInitName" : "McKinney, B",
            "initLastName" : "B McKinney",
            "fullFMLName" : "William Landis McKinney",
            "fullLFMName" : "McKinney, William Landis",
            "strikeZoneTop" : 3.18,
            "strikeZoneBottom" : 1.54
          },
          "jerseyNumber" : "28",
          "position" : {
            "code" : "7",
            "name" : "Outfielder",
            "type" : "Outfielder",
            "abbreviation" : "LF"
          },
          "status" : {
            "code" : "A",
            "description" : "Active"
          },
          "parentTeamId" : 141
        },
        {
            "person" : {
              "id" : 592273,
              "fullName" : "Brandon Drury",
              "link" : "/api/v1/people/592273",
              "firstName" : "Brandon",
              "lastName" : "Drury",
              "primaryNumber" : "3",
              "birthDate" : "1992-08-21",
              "currentAge" : 27,
              "birthCity" : "Grants Pass",
              "birthStateProvince" : "OR",
              "birthCountry" : "USA",
              "height" : "6' 2",
              "weight" : 215,
              "active" : true,
              "primaryPosition" : {
                "code" : "5",
                "name" : "Third Base",
                "type" : "Infielder",
                "abbreviation" : "3B"
              },
              "useName" : "Brandon",
              "middleName" : "S.",
              "boxscoreName" : "Drury",
              "nickName" : "Dru",
              "gender" : "M",
              "isPlayer" : true,
              "isVerified" : true,
              "draftYear" : 2010,
              "stats" : [ {
                "type" : {
                  "displayName" : "season"
                },
                "group" : {
                  "displayName" : "hitting"
                },
                "exemptions" : [ ],
                "splits" : [ {
                  "season" : "2019",
                  "stat" : {
                    "gamesPlayed" : 101,
                    "groundOuts" : 90,
                    "runs" : 37,
                    "doubles" : 18,
                    "triples" : 1,
                    "homeRuns" : 14,
                    "strikeOuts" : 96,
                    "baseOnBalls" : 19,
                    "intentionalWalks" : 0,
                    "hits" : 79,
                    "hitByPitch" : 1,
                    "avg" : ".224",
                    "atBats" : 353,
                    "obp" : ".263",
                    "slg" : ".399",
                    "ops" : ".663",
                    "caughtStealing" : 0,
                    "stolenBases" : 0,
                    "stolenBasePercentage" : ".---",
                    "groundIntoDoublePlay" : 5,
                    "numberOfPitches" : 1493,
                    "plateAppearances" : 376,
                    "totalBases" : 141,
                    "rbi" : 39,
                    "leftOnBase" : 151,
                    "sacBunts" : 0,
                    "sacFlies" : 3,
                    "babip" : ".264",
                    "groundOutsToAirouts" : "0.99",
                    "atBatsPerHomeRun" : "25.21"
                  },
                  "team" : {
                    "id" : 141,
                    "name" : "Toronto Blue Jays",
                    "link" : "/api/v1/teams/141"
                  },
                  "league" : {
                    "id" : 103,
                    "name" : "American League",
                    "link" : "/api/v1/league/103"
                  },
                  "gameType" : "R"
                } ]
              } ],
              "mlbDebutDate" : "2015-09-01",
              "batSide" : {
                "code" : "R",
                "description" : "Right"
              },
              "pitchHand" : {
                "code" : "R",
                "description" : "Right"
              },
              "nameFirstLast" : "Brandon Drury",
              "nameSlug" : "brandon-drury-592273",
              "firstLastName" : "Brandon Drury",
              "lastFirstName" : "Drury, Brandon",
              "lastInitName" : "Drury, B",
              "initLastName" : "B Drury",
              "fullFMLName" : "Brandon S. Drury",
              "fullLFMName" : "Drury, Brandon S.",
              "strikeZoneTop" : 3.46,
              "strikeZoneBottom" : 1.68
            },
            "jerseyNumber" : "3",
            "position" : {
              "code" : "5",
              "name" : "Third Base",
              "type" : "Infielder",
              "abbreviation" : "3B"
            },
            "status" : {
              "code" : "A",
              "description" : "Active"
            },
            "parentTeamId" : 141
          }
    ],
    catchers: [],
    infield: [],
    outfield: []
  }


  render(){


    return (
          <React.Fragment>
            <div className={styles.TeamDetails + " row justify-content-center"}>
              <div className="card mb-3 col-8 col-sm-10" style={{"maxWidth": "850px", "padding":"0.5rem"}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://www.mlbstatic.com/team-logos/141.svg" alt="Logo"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{this.state.teamInfo.name}</h5>
                      <p className="card-text">({this.state.teamInfo.firstYearOfPlay}-present)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.Buttons + " row col-12 justify-content-center"}>
                <div className={styles.Clicked + " league col-12 col-md-2"}>ALL</div>
                <div className="league col-3 col-md-2" >Pitchers</div>
                <div className="league col-3 col-md-2" >Catchers</div>
                <div className="league col-3 col-md-2" >Infield</div>
                <div className="league col-3 col-md-2" >Outfield</div>
              </div>


              <PlayerList players={this.state.pitchers}>Pitchers</PlayerList>
            </div>


          </React.Fragment>
    )
  }
}

export default TeamDetails;
