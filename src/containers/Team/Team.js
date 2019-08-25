import React, { Component} from "react";
import styles from './Team.module.css'
import Division from './Division/Division'

class Team extends Component {
  state = {
    //American League
    103 : {
      201 : [
        {
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
        {
          "id" : 147,
          "name" : "New York Yankees",
          "link" : "/api/v1/teams/147",
          "venue" : {
            "id" : 3313,
            "name" : "Yankee Stadium",
            "link" : "/api/v1/venues/3313"
          },
          "teamCode" : "nya",
          "fileCode" : "nyy",
          "abbreviation" : "NYY",
          "teamName" : "Yankees",
          "locationName" : "Bronx",
          "firstYearOfPlay" : "1903",
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
          "shortName" : "NY Yankees",
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          },
          "allStarStatus" : "N",
          "active" : true
      },
      {
          "id" : 110,
          "name" : "Baltimore Orioles",
          "link" : "/api/v1/teams/110",
          "venue" : {
            "id" : 2,
            "name" : "Oriole Park at Camden Yards",
            "link" : "/api/v1/venues/2"
          },
          "teamCode" : "bal",
          "fileCode" : "bal",
          "abbreviation" : "BAL",
          "teamName" : "Orioles",
          "locationName" : "Baltimore",
          "firstYearOfPlay" : "1901",
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
          "shortName" : "Baltimore",
          "springLeague" : {
            "id" : 115,
            "name" : "Grapefruit League",
            "link" : "/api/v1/league/115",
            "abbreviation" : "GL"
          },
          "allStarStatus" : "N",
          "active" : true
        },
        {
            "id" : 111,
            "name" : "Boston Red Sox",
            "link" : "/api/v1/teams/111",
            "venue" : {
              "id" : 3,
              "name" : "Fenway Park",
              "link" : "/api/v1/venues/3"
            },
            "teamCode" : "bos",
            "fileCode" : "bos",
            "abbreviation" : "BOS",
            "teamName" : "Red Sox",
            "locationName" : "Boston",
            "firstYearOfPlay" : "1901",
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
            "shortName" : "Boston",
            "springLeague" : {
              "id" : 115,
              "name" : "Grapefruit League",
              "link" : "/api/v1/league/115",
              "abbreviation" : "GL"
            },
            "allStarStatus" : "N",
            "active" : true
          },
          {
              "id" : 139,
              "name" : "Tampa Bay Rays",
              "link" : "/api/v1/teams/139",
              "venue" : {
                "id" : 12,
                "name" : "Tropicana Field",
                "link" : "/api/v1/venues/12"
              },
              "teamCode" : "tba",
              "fileCode" : "tb",
              "abbreviation" : "TB",
              "teamName" : "Rays",
              "locationName" : "Tampa Bay",
              "firstYearOfPlay" : "1998",
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
              "shortName" : "Tampa Bay",
              "springLeague" : {
                "id" : 115,
                "name" : "Grapefruit League",
                "link" : "/api/v1/league/115",
                "abbreviation" : "GL"
              },
              "allStarStatus" : "N",
              "active" : true
            }


      ], //Amaerican League East
      202 : [], //American League Central
      200 : [], //American League West
    },
    //National League
    104 : {
      204 : [], //National League East
      205 : [], //National League Central
      203 : [], //National League West
    }

  }

  componentDidMount(){
    console.log("Team")
    this.props.history.replace('/')
  }

  render(){

    return (
      <React.Fragment>
        <div className={styles.Leagues + " row justify-content-center"}>
          <div className={styles.Clicked + " league col-6 col-md-5"}>Amaerican League</div>
          <div className="league col-6 col-md-5">National League</div>
        </div>

        <div className={styles.Divisions}>
          <Division league="AL" division_name="Amaerican League East" teams={this.state[103][201]}/>
          <Division league="AL" division_name="Amaerican League East" teams={this.state[103][201]}/>
        </div>

      </React.Fragment>

    )
  }
}

export default Team;
