import React, {Component} from "react";
import styles from './PlayerDetails.module.css'

class PlayerDetails extends Component {
  state = {
    player: {
    "id" : 519166,
    "fullName" : "Neil Ramirez",
    "link" : "/api/v1/people/519166",
    "firstName" : "Neil",
    "lastName" : "Ramirez",
    "primaryNumber" : "33",
    "birthDate" : "1989-05-25",
    "currentAge" : 30,
    "birthCity" : "Virginia Beach",
    "birthStateProvince" : "VA",
    "birthCountry" : "USA",
    "height" : "6' 4",
    "weight" : 215,
    "active" : true,
    "primaryPosition" : {
      "code" : "1",
      "name" : "Pitcher",
      "type" : "Pitcher",
      "abbreviation" : "P"
    },
    "useName" : "Neil",
    "middleName" : "Andrew",
    "boxscoreName" : "Ramírez, N",
    "nickName" : "Rammer",
    "gender" : "M",
    "isPlayer" : true,
    "isVerified" : true,
    "draftYear" : 2007,
    "stats" : [ {
      "type" : {
        "displayName" : "yearByYear"
      },
      "group" : {
        "displayName" : "pitching"
      },
      "exemptions" : [ ],
      "splits" : [ {
        "season" : "2014",
        "stat" : {
          "gamesPlayed" : 50,
          "gamesStarted" : 0,
          "groundOuts" : 22,
          "runs" : 11,
          "homeRuns" : 2,
          "strikeOuts" : 53,
          "baseOnBalls" : 17,
          "intentionalWalks" : 0,
          "hits" : 29,
          "avg" : ".184",
          "atBats" : 158,
          "obp" : ".271",
          "slg" : ".278",
          "ops" : ".550",
          "caughtStealing" : 0,
          "stolenBases" : 6,
          "stolenBasePercentage" : "1.000",
          "groundIntoDoublePlay" : 1,
          "numberOfPitches" : 746,
          "era" : "1.44",
          "inningsPitched" : "43.2",
          "wins" : 3,
          "losses" : 3,
          "saves" : 3,
          "saveOpportunities" : 4,
          "holds" : 16,
          "earnedRuns" : 7,
          "whip" : "1.05",
          "battersFaced" : 177,
          "gamesPitched" : 50,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 457,
          "strikePercentage" : "61.3",
          "hitBatsmen" : 2,
          "balks" : 1,
          "wildPitches" : 3,
          "pickoffs" : 0,
          "airOuts" : 54,
          "groundOutsToAirouts" : "0.41",
          "winPercentage" : ".500",
          "pitchesPerInning" : "17.1",
          "gamesFinished" : 10,
          "strikeoutWalkRatio" : "3.12",
          "strikeoutsPer9Inn" : "10.92",
          "walksPer9Inn" : "3.50",
          "hitsPer9Inn" : "5.98",
          "runsScoredPer9" : "4.95",
          "homeRunsPer9" : "0.41",
          "inheritedRunners" : 9,
          "inheritedRunnersScored" : 2
        },
        "team" : {
          "id" : 112,
          "name" : "Chicago Cubs",
          "link" : "/api/v1/teams/112"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2015",
        "stat" : {
          "gamesPlayed" : 19,
          "gamesStarted" : 0,
          "groundOuts" : 10,
          "runs" : 5,
          "homeRuns" : 1,
          "strikeOuts" : 15,
          "baseOnBalls" : 6,
          "intentionalWalks" : 0,
          "hits" : 12,
          "avg" : ".231",
          "atBats" : 52,
          "obp" : ".300",
          "slg" : ".385",
          "ops" : ".685",
          "caughtStealing" : 0,
          "stolenBases" : 1,
          "stolenBasePercentage" : "1.000",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 251,
          "era" : "3.21",
          "inningsPitched" : "14.0",
          "wins" : 1,
          "losses" : 0,
          "saves" : 0,
          "saveOpportunities" : 0,
          "holds" : 2,
          "earnedRuns" : 5,
          "whip" : "1.29",
          "battersFaced" : 60,
          "gamesPitched" : 19,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 151,
          "strikePercentage" : "60.2",
          "hitBatsmen" : 0,
          "balks" : 0,
          "wildPitches" : 2,
          "pickoffs" : 0,
          "airOuts" : 17,
          "groundOutsToAirouts" : "0.59",
          "winPercentage" : "1.000",
          "pitchesPerInning" : "17.9",
          "gamesFinished" : 4,
          "strikeoutWalkRatio" : "2.50",
          "strikeoutsPer9Inn" : "9.64",
          "walksPer9Inn" : "3.86",
          "hitsPer9Inn" : "7.71",
          "runsScoredPer9" : "2.57",
          "homeRunsPer9" : "0.64",
          "inheritedRunners" : 3,
          "inheritedRunnersScored" : 0
        },
        "team" : {
          "id" : 112,
          "name" : "Chicago Cubs",
          "link" : "/api/v1/teams/112"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2016",
        "stat" : {
          "gamesPlayed" : 18,
          "gamesStarted" : 0,
          "groundOuts" : 12,
          "runs" : 16,
          "homeRuns" : 8,
          "strikeOuts" : 24,
          "baseOnBalls" : 18,
          "intentionalWalks" : 2,
          "hits" : 22,
          "avg" : ".256",
          "atBats" : 86,
          "obp" : ".374",
          "slg" : ".593",
          "ops" : ".967",
          "caughtStealing" : 3,
          "stolenBases" : 3,
          "stolenBasePercentage" : ".500",
          "groundIntoDoublePlay" : 2,
          "numberOfPitches" : 465,
          "era" : "6.00",
          "inningsPitched" : "24.0",
          "wins" : 0,
          "losses" : 0,
          "saves" : 0,
          "saveOpportunities" : 0,
          "holds" : 1,
          "earnedRuns" : 16,
          "whip" : "1.67",
          "battersFaced" : 107,
          "gamesPitched" : 18,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 288,
          "strikePercentage" : "61.9",
          "hitBatsmen" : 0,
          "balks" : 0,
          "wildPitches" : 5,
          "pickoffs" : 0,
          "airOuts" : 31,
          "groundOutsToAirouts" : "0.39",
          "winPercentage" : ".---",
          "pitchesPerInning" : "19.4",
          "gamesFinished" : 7,
          "strikeoutWalkRatio" : "1.33",
          "strikeoutsPer9Inn" : "9.00",
          "walksPer9Inn" : "6.75",
          "hitsPer9Inn" : "8.25",
          "runsScoredPer9" : "1.50",
          "homeRunsPer9" : "3.00",
          "inheritedRunners" : 18,
          "inheritedRunnersScored" : 5
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R",
        "numTeams" : 3
      }, {
        "season" : "2016",
        "stat" : {
          "gamesPlayed" : 8,
          "gamesStarted" : 0,
          "groundOuts" : 3,
          "runs" : 4,
          "homeRuns" : 1,
          "strikeOuts" : 10,
          "baseOnBalls" : 8,
          "intentionalWalks" : 2,
          "hits" : 5,
          "avg" : ".200",
          "atBats" : 25,
          "obp" : ".371",
          "slg" : ".400",
          "ops" : ".771",
          "caughtStealing" : 0,
          "stolenBases" : 2,
          "stolenBasePercentage" : "1.000",
          "groundIntoDoublePlay" : 1,
          "numberOfPitches" : 144,
          "era" : "4.70",
          "inningsPitched" : "7.2",
          "wins" : 0,
          "losses" : 0,
          "saves" : 0,
          "saveOpportunities" : 0,
          "holds" : 1,
          "earnedRuns" : 4,
          "whip" : "1.70",
          "battersFaced" : 35,
          "gamesPitched" : 8,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 88,
          "strikePercentage" : "61.1",
          "hitBatsmen" : 0,
          "balks" : 0,
          "wildPitches" : 3,
          "pickoffs" : 0,
          "airOuts" : 9,
          "groundOutsToAirouts" : "0.33",
          "winPercentage" : ".---",
          "pitchesPerInning" : "18.8",
          "gamesFinished" : 4,
          "strikeoutWalkRatio" : "1.25",
          "strikeoutsPer9Inn" : "11.74",
          "walksPer9Inn" : "9.39",
          "hitsPer9Inn" : "5.87",
          "runsScoredPer9" : "0.00",
          "homeRunsPer9" : "1.17",
          "inheritedRunners" : 7,
          "inheritedRunnersScored" : 1
        },
        "team" : {
          "id" : 112,
          "name" : "Chicago Cubs",
          "link" : "/api/v1/teams/112"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2016",
        "stat" : {
          "gamesPlayed" : 2,
          "gamesStarted" : 0,
          "groundOuts" : 1,
          "runs" : 2,
          "homeRuns" : 2,
          "strikeOuts" : 3,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 2,
          "avg" : ".286",
          "atBats" : 7,
          "obp" : ".286",
          "slg" : "1.143",
          "ops" : "1.429",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 25,
          "era" : "10.80",
          "inningsPitched" : "1.2",
          "wins" : 0,
          "losses" : 0,
          "saves" : 0,
          "saveOpportunities" : 0,
          "holds" : 0,
          "earnedRuns" : 2,
          "whip" : "1.20",
          "battersFaced" : 7,
          "gamesPitched" : 2,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 15,
          "strikePercentage" : "60.0",
          "hitBatsmen" : 0,
          "balks" : 0,
          "wildPitches" : 0,
          "pickoffs" : 0,
          "airOuts" : 1,
          "groundOutsToAirouts" : "1.00",
          "winPercentage" : ".---",
          "pitchesPerInning" : "15.0",
          "gamesFinished" : 0,
          "strikeoutWalkRatio" : "*.**",
          "strikeoutsPer9Inn" : "16.20",
          "walksPer9Inn" : "0.00",
          "hitsPer9Inn" : "10.80",
          "runsScoredPer9" : "0.00",
          "homeRunsPer9" : "10.80",
          "inheritedRunners" : 2,
          "inheritedRunnersScored" : 2
        },
        "team" : {
          "id" : 158,
          "name" : "Milwaukee Brewers",
          "link" : "/api/v1/teams/158"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2016",
        "stat" : {
          "gamesPlayed" : 8,
          "gamesStarted" : 0,
          "groundOuts" : 8,
          "runs" : 10,
          "homeRuns" : 5,
          "strikeOuts" : 11,
          "baseOnBalls" : 10,
          "intentionalWalks" : 0,
          "hits" : 15,
          "avg" : ".278",
          "atBats" : 54,
          "obp" : ".385",
          "slg" : ".611",
          "ops" : ".996",
          "caughtStealing" : 3,
          "stolenBases" : 1,
          "stolenBasePercentage" : ".250",
          "groundIntoDoublePlay" : 1,
          "numberOfPitches" : 296,
          "era" : "6.14",
          "inningsPitched" : "14.2",
          "wins" : 0,
          "losses" : 0,
          "saves" : 0,
          "saveOpportunities" : 0,
          "holds" : 0,
          "earnedRuns" : 10,
          "whip" : "1.70",
          "battersFaced" : 65,
          "gamesPitched" : 8,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 185,
          "strikePercentage" : "62.5",
          "hitBatsmen" : 0,
          "balks" : 0,
          "wildPitches" : 2,
          "pickoffs" : 0,
          "airOuts" : 21,
          "groundOutsToAirouts" : "0.38",
          "winPercentage" : ".---",
          "pitchesPerInning" : "20.2",
          "gamesFinished" : 3,
          "strikeoutWalkRatio" : "1.10",
          "strikeoutsPer9Inn" : "6.75",
          "walksPer9Inn" : "6.14",
          "hitsPer9Inn" : "9.20",
          "runsScoredPer9" : "2.45",
          "homeRunsPer9" : "3.07",
          "inheritedRunners" : 9,
          "inheritedRunnersScored" : 2
        },
        "team" : {
          "id" : 142,
          "name" : "Minnesota Twins",
          "link" : "/api/v1/teams/142"
        },
        "league" : {
          "id" : 103,
          "name" : "American League",
          "link" : "/api/v1/league/103"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2017",
        "stat" : {
          "gamesPlayed" : 29,
          "gamesStarted" : 0,
          "groundOuts" : 16,
          "runs" : 30,
          "homeRuns" : 6,
          "strikeOuts" : 44,
          "baseOnBalls" : 21,
          "intentionalWalks" : 0,
          "hits" : 35,
          "avg" : ".273",
          "atBats" : 128,
          "obp" : ".373",
          "slg" : ".453",
          "ops" : ".826",
          "caughtStealing" : 1,
          "stolenBases" : 1,
          "stolenBasePercentage" : ".500",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 641,
          "era" : "7.18",
          "inningsPitched" : "31.1",
          "wins" : 0,
          "losses" : 1,
          "saves" : 0,
          "saveOpportunities" : 1,
          "holds" : 2,
          "earnedRuns" : 25,
          "whip" : "1.79",
          "battersFaced" : 153,
          "gamesPitched" : 29,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 399,
          "strikePercentage" : "62.2",
          "hitBatsmen" : 1,
          "balks" : 0,
          "wildPitches" : 3,
          "pickoffs" : 0,
          "airOuts" : 36,
          "groundOutsToAirouts" : "0.44",
          "winPercentage" : ".000",
          "pitchesPerInning" : "20.5",
          "gamesFinished" : 9,
          "strikeoutWalkRatio" : "2.10",
          "strikeoutsPer9Inn" : "12.64",
          "walksPer9Inn" : "6.03",
          "hitsPer9Inn" : "10.05",
          "runsScoredPer9" : "3.73",
          "homeRunsPer9" : "1.72",
          "inheritedRunners" : 26,
          "inheritedRunnersScored" : 7
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R",
        "numTeams" : 2
      }, {
        "season" : "2017",
        "stat" : {
          "gamesPlayed" : 9,
          "gamesStarted" : 0,
          "groundOuts" : 3,
          "runs" : 15,
          "homeRuns" : 2,
          "strikeOuts" : 18,
          "baseOnBalls" : 4,
          "intentionalWalks" : 0,
          "hits" : 15,
          "avg" : ".319",
          "atBats" : 47,
          "obp" : ".377",
          "slg" : ".511",
          "ops" : ".888",
          "caughtStealing" : 1,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".000",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 223,
          "era" : "8.71",
          "inningsPitched" : "10.1",
          "wins" : 0,
          "losses" : 0,
          "saves" : 0,
          "saveOpportunities" : 0,
          "holds" : 1,
          "earnedRuns" : 10,
          "whip" : "1.84",
          "battersFaced" : 53,
          "gamesPitched" : 9,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 143,
          "strikePercentage" : "64.1",
          "hitBatsmen" : 1,
          "balks" : 0,
          "wildPitches" : 2,
          "pickoffs" : 0,
          "airOuts" : 12,
          "groundOutsToAirouts" : "0.25",
          "winPercentage" : ".---",
          "pitchesPerInning" : "21.6",
          "gamesFinished" : 2,
          "strikeoutWalkRatio" : "4.50",
          "strikeoutsPer9Inn" : "15.68",
          "walksPer9Inn" : "3.48",
          "hitsPer9Inn" : "13.06",
          "runsScoredPer9" : "4.35",
          "homeRunsPer9" : "1.74",
          "inheritedRunners" : 10,
          "inheritedRunnersScored" : 3
        },
        "team" : {
          "id" : 137,
          "name" : "San Francisco Giants",
          "link" : "/api/v1/teams/137"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2017",
        "stat" : {
          "gamesPlayed" : 20,
          "gamesStarted" : 0,
          "groundOuts" : 13,
          "runs" : 15,
          "homeRuns" : 4,
          "strikeOuts" : 26,
          "baseOnBalls" : 17,
          "intentionalWalks" : 0,
          "hits" : 20,
          "avg" : ".247",
          "atBats" : 81,
          "obp" : ".370",
          "slg" : ".420",
          "ops" : ".790",
          "caughtStealing" : 0,
          "stolenBases" : 1,
          "stolenBasePercentage" : "1.000",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 418,
          "era" : "6.43",
          "inningsPitched" : "21.0",
          "wins" : 0,
          "losses" : 1,
          "saves" : 0,
          "saveOpportunities" : 1,
          "holds" : 1,
          "earnedRuns" : 15,
          "whip" : "1.76",
          "battersFaced" : 100,
          "gamesPitched" : 20,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 256,
          "strikePercentage" : "61.2",
          "hitBatsmen" : 0,
          "balks" : 0,
          "wildPitches" : 1,
          "pickoffs" : 0,
          "airOuts" : 24,
          "groundOutsToAirouts" : "0.54",
          "winPercentage" : ".000",
          "pitchesPerInning" : "19.9",
          "gamesFinished" : 7,
          "strikeoutWalkRatio" : "1.53",
          "strikeoutsPer9Inn" : "11.14",
          "walksPer9Inn" : "7.29",
          "hitsPer9Inn" : "8.57",
          "runsScoredPer9" : "3.43",
          "homeRunsPer9" : "1.71",
          "inheritedRunners" : 16,
          "inheritedRunnersScored" : 4
        },
        "team" : {
          "id" : 121,
          "name" : "New York Mets",
          "link" : "/api/v1/teams/121"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2018",
        "stat" : {
          "gamesPlayed" : 47,
          "gamesStarted" : 0,
          "groundOuts" : 29,
          "runs" : 21,
          "homeRuns" : 9,
          "strikeOuts" : 51,
          "baseOnBalls" : 18,
          "intentionalWalks" : 1,
          "hits" : 36,
          "avg" : ".228",
          "atBats" : 158,
          "obp" : ".318",
          "slg" : ".456",
          "ops" : ".774",
          "caughtStealing" : 1,
          "stolenBases" : 12,
          "stolenBasePercentage" : ".923",
          "groundIntoDoublePlay" : 2,
          "numberOfPitches" : 747,
          "era" : "4.54",
          "inningsPitched" : "41.2",
          "wins" : 0,
          "losses" : 3,
          "saves" : 0,
          "saveOpportunities" : 1,
          "holds" : 13,
          "earnedRuns" : 21,
          "whip" : "1.30",
          "battersFaced" : 180,
          "gamesPitched" : 47,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 496,
          "strikePercentage" : "66.4",
          "hitBatsmen" : 3,
          "balks" : 0,
          "wildPitches" : 0,
          "pickoffs" : 0,
          "airOuts" : 43,
          "groundOutsToAirouts" : "0.67",
          "winPercentage" : ".000",
          "pitchesPerInning" : "17.9",
          "gamesFinished" : 9,
          "strikeoutWalkRatio" : "2.83",
          "strikeoutsPer9Inn" : "11.02",
          "walksPer9Inn" : "3.89",
          "hitsPer9Inn" : "7.78",
          "runsScoredPer9" : "5.18",
          "homeRunsPer9" : "1.94",
          "inheritedRunners" : 29,
          "inheritedRunnersScored" : 7
        },
        "team" : {
          "id" : 114,
          "name" : "Cleveland Indians",
          "link" : "/api/v1/teams/114"
        },
        "league" : {
          "id" : 103,
          "name" : "American League",
          "link" : "/api/v1/league/103"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2019",
        "stat" : {
          "gamesPlayed" : 20,
          "gamesStarted" : 1,
          "groundOuts" : 9,
          "runs" : 16,
          "homeRuns" : 7,
          "strikeOuts" : 22,
          "baseOnBalls" : 13,
          "intentionalWalks" : 0,
          "hits" : 23,
          "avg" : ".274",
          "atBats" : 84,
          "obp" : ".364",
          "slg" : ".595",
          "ops" : ".959",
          "caughtStealing" : 0,
          "stolenBases" : 4,
          "stolenBasePercentage" : "1.000",
          "groundIntoDoublePlay" : 1,
          "numberOfPitches" : 411,
          "era" : "6.14",
          "inningsPitched" : "22.0",
          "wins" : 0,
          "losses" : 1,
          "saves" : 0,
          "saveOpportunities" : 0,
          "holds" : 2,
          "earnedRuns" : 15,
          "whip" : "1.64",
          "battersFaced" : 99,
          "gamesPitched" : 20,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 257,
          "strikePercentage" : "62.5",
          "hitBatsmen" : 0,
          "balks" : 0,
          "wildPitches" : 1,
          "pickoffs" : 0,
          "airOuts" : 32,
          "groundOutsToAirouts" : "0.28",
          "winPercentage" : ".000",
          "pitchesPerInning" : "18.7",
          "gamesFinished" : 3,
          "strikeoutWalkRatio" : "1.69",
          "strikeoutsPer9Inn" : "9.00",
          "walksPer9Inn" : "5.32",
          "hitsPer9Inn" : "9.41",
          "runsScoredPer9" : "0.82",
          "homeRunsPer9" : "2.86",
          "inheritedRunners" : 13,
          "inheritedRunnersScored" : 3
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R",
        "numTeams" : 2
      }, {
        "season" : "2019",
        "stat" : {
          "gamesPlayed" : 16,
          "gamesStarted" : 0,
          "groundOuts" : 6,
          "runs" : 11,
          "homeRuns" : 5,
          "strikeOuts" : 18,
          "baseOnBalls" : 9,
          "intentionalWalks" : 0,
          "hits" : 18,
          "avg" : ".281",
          "atBats" : 64,
          "obp" : ".360",
          "slg" : ".578",
          "ops" : ".938",
          "caughtStealing" : 0,
          "stolenBases" : 3,
          "stolenBasePercentage" : "1.000",
          "groundIntoDoublePlay" : 1,
          "numberOfPitches" : 314,
          "era" : "5.40",
          "inningsPitched" : "16.2",
          "wins" : 0,
          "losses" : 1,
          "saves" : 0,
          "saveOpportunities" : 0,
          "holds" : 2,
          "earnedRuns" : 10,
          "whip" : "1.62",
          "battersFaced" : 75,
          "gamesPitched" : 16,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 201,
          "strikePercentage" : "64.0",
          "hitBatsmen" : 0,
          "balks" : 0,
          "wildPitches" : 0,
          "pickoffs" : 0,
          "airOuts" : 24,
          "groundOutsToAirouts" : "0.25",
          "winPercentage" : ".000",
          "pitchesPerInning" : "18.8",
          "gamesFinished" : 3,
          "strikeoutWalkRatio" : "2.00",
          "strikeoutsPer9Inn" : "9.72",
          "walksPer9Inn" : "4.86",
          "hitsPer9Inn" : "9.72",
          "runsScoredPer9" : "1.08",
          "homeRunsPer9" : "2.70",
          "inheritedRunners" : 9,
          "inheritedRunnersScored" : 2
        },
        "team" : {
          "id" : 114,
          "name" : "Cleveland Indians",
          "link" : "/api/v1/teams/114"
        },
        "league" : {
          "id" : 103,
          "name" : "American League",
          "link" : "/api/v1/league/103"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2019",
        "stat" : {
          "gamesPlayed" : 4,
          "gamesStarted" : 1,
          "groundOuts" : 3,
          "runs" : 5,
          "homeRuns" : 2,
          "strikeOuts" : 4,
          "baseOnBalls" : 4,
          "intentionalWalks" : 0,
          "hits" : 5,
          "avg" : ".250",
          "atBats" : 20,
          "obp" : ".375",
          "slg" : ".650",
          "ops" : "1.025",
          "caughtStealing" : 0,
          "stolenBases" : 1,
          "stolenBasePercentage" : "1.000",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 97,
          "era" : "8.44",
          "inningsPitched" : "5.1",
          "wins" : 0,
          "losses" : 0,
          "saves" : 0,
          "saveOpportunities" : 0,
          "holds" : 0,
          "earnedRuns" : 5,
          "whip" : "1.69",
          "battersFaced" : 24,
          "gamesPitched" : 4,
          "completeGames" : 0,
          "shutouts" : 0,
          "strikes" : 56,
          "strikePercentage" : "57.7",
          "hitBatsmen" : 0,
          "balks" : 0,
          "wildPitches" : 1,
          "pickoffs" : 0,
          "airOuts" : 8,
          "groundOutsToAirouts" : "0.38",
          "winPercentage" : ".---",
          "pitchesPerInning" : "18.2",
          "gamesFinished" : 0,
          "strikeoutWalkRatio" : "1.00",
          "strikeoutsPer9Inn" : "6.75",
          "walksPer9Inn" : "6.75",
          "hitsPer9Inn" : "8.44",
          "runsScoredPer9" : "0.00",
          "homeRunsPer9" : "3.38",
          "inheritedRunners" : 4,
          "inheritedRunnersScored" : 1
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
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      } ]
    }, {
      "type" : {
        "displayName" : "yearByYear"
      },
      "group" : {
        "displayName" : "hitting"
      },
      "exemptions" : [ ],
      "splits" : [ {
        "season" : "2014",
        "stat" : {
          "gamesPlayed" : 47,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 0,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".---",
          "atBats" : 0,
          "obp" : ".---",
          "slg" : ".---",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 0,
          "plateAppearances" : 0,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 0,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
        },
        "team" : {
          "id" : 112,
          "name" : "Chicago Cubs",
          "link" : "/api/v1/teams/112"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2015",
        "stat" : {
          "gamesPlayed" : 19,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 0,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".---",
          "atBats" : 0,
          "obp" : ".---",
          "slg" : ".---",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 0,
          "plateAppearances" : 0,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 0,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
        },
        "team" : {
          "id" : 112,
          "name" : "Chicago Cubs",
          "link" : "/api/v1/teams/112"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2016",
        "stat" : {
          "gamesPlayed" : 10,
          "flyOuts" : 0,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 0,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".---",
          "atBats" : 0,
          "obp" : ".---",
          "slg" : ".---",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 0,
          "plateAppearances" : 0,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 0,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R",
        "numTeams" : 2
      }, {
        "season" : "2016",
        "stat" : {
          "gamesPlayed" : 8,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 0,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".---",
          "atBats" : 0,
          "obp" : ".---",
          "slg" : ".---",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 0,
          "plateAppearances" : 0,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 0,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
        },
        "team" : {
          "id" : 112,
          "name" : "Chicago Cubs",
          "link" : "/api/v1/teams/112"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2016",
        "stat" : {
          "gamesPlayed" : 2,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 0,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".---",
          "atBats" : 0,
          "obp" : ".---",
          "slg" : ".---",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 0,
          "plateAppearances" : 0,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 0,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
        },
        "team" : {
          "id" : 158,
          "name" : "Milwaukee Brewers",
          "link" : "/api/v1/teams/158"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2017",
        "stat" : {
          "gamesPlayed" : 28,
          "flyOuts" : 0,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 1,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".000",
          "atBats" : 1,
          "obp" : ".000",
          "slg" : ".000",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 4,
          "plateAppearances" : 1,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 2,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R",
        "numTeams" : 2
      }, {
        "season" : "2017",
        "stat" : {
          "gamesPlayed" : 9,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 0,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".---",
          "atBats" : 0,
          "obp" : ".---",
          "slg" : ".---",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 0,
          "plateAppearances" : 0,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 0,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
        },
        "team" : {
          "id" : 137,
          "name" : "San Francisco Giants",
          "link" : "/api/v1/teams/137"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2017",
        "stat" : {
          "gamesPlayed" : 19,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 1,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".000",
          "atBats" : 1,
          "obp" : ".000",
          "slg" : ".000",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 4,
          "plateAppearances" : 1,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 2,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
        },
        "team" : {
          "id" : 121,
          "name" : "New York Mets",
          "link" : "/api/v1/teams/121"
        },
        "league" : {
          "id" : 104,
          "name" : "National League",
          "link" : "/api/v1/league/104"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2018",
        "stat" : {
          "gamesPlayed" : 3,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 1,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".000",
          "atBats" : 1,
          "obp" : ".000",
          "slg" : ".000",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 6,
          "plateAppearances" : 1,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 2,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
        },
        "team" : {
          "id" : 114,
          "name" : "Cleveland Indians",
          "link" : "/api/v1/teams/114"
        },
        "league" : {
          "id" : 103,
          "name" : "American League",
          "link" : "/api/v1/league/103"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2019",
        "stat" : {
          "gamesPlayed" : 2,
          "flyOuts" : 0,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 0,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".---",
          "atBats" : 0,
          "obp" : ".---",
          "slg" : ".---",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 0,
          "plateAppearances" : 0,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 0,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R",
        "numTeams" : 2
      }, {
        "season" : "2019",
        "stat" : {
          "gamesPlayed" : 1,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 0,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".---",
          "atBats" : 0,
          "obp" : ".---",
          "slg" : ".---",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 0,
          "plateAppearances" : 0,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 0,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
        },
        "team" : {
          "id" : 114,
          "name" : "Cleveland Indians",
          "link" : "/api/v1/teams/114"
        },
        "league" : {
          "id" : 103,
          "name" : "American League",
          "link" : "/api/v1/league/103"
        },
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      }, {
        "season" : "2019",
        "stat" : {
          "gamesPlayed" : 1,
          "groundOuts" : 0,
          "runs" : 0,
          "doubles" : 0,
          "triples" : 0,
          "homeRuns" : 0,
          "strikeOuts" : 0,
          "baseOnBalls" : 0,
          "intentionalWalks" : 0,
          "hits" : 0,
          "hitByPitch" : 0,
          "avg" : ".---",
          "atBats" : 0,
          "obp" : ".---",
          "slg" : ".---",
          "ops" : ".000",
          "caughtStealing" : 0,
          "stolenBases" : 0,
          "stolenBasePercentage" : ".---",
          "groundIntoDoublePlay" : 0,
          "numberOfPitches" : 0,
          "plateAppearances" : 0,
          "totalBases" : 0,
          "rbi" : 0,
          "leftOnBase" : 0,
          "sacBunts" : 0,
          "sacFlies" : 0,
          "babip" : ".---",
          "groundOutsToAirouts" : "-.--",
          "atBatsPerHomeRun" : "-.--"
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
        "sport" : {
          "id" : 1,
          "link" : "/api/v1/sports/1",
          "abbreviation" : "MLB"
        },
        "gameType" : "R"
      } ]
    } ],
    "mlbDebutDate" : "2014-04-25",
    "batSide" : {
      "code" : "R",
      "description" : "Right"
    },
    "pitchHand" : {
      "code" : "R",
      "description" : "Right"
    },
    "nameFirstLast" : "Neil Ramirez",
    "nameSlug" : "neil-ramirez-519166",
    "firstLastName" : "Neil Ramírez",
    "lastFirstName" : "Ramírez, Neil",
    "lastInitName" : "Ramírez, N",
    "initLastName" : "N Ramírez",
    "fullFMLName" : "Neil Andrew Ramírez",
    "fullLFMName" : "Ramírez, Neil Andrew",
    "strikeZoneTop" : 3.549,
    "strikeZoneBottom" : 1.627
  }
  }
  render(){
    return (
          <React.Fragment>
          <div className="row justify-content-center">
              <div className={styles.BIO + " card col-6 col-sm-3"}>
                <img src={`https://securea.mlb.com/mlb/images/players/head_shot/${this.state.player.id}.jpg`} class="card-img-top" alt="Player"/>
                <div className="card-body" style={{"display" : "grid", "paddingLeft": "0.5rem", "textAlign": "left", "paddingBottom" : "0"}}>
                  <span>#{this.state.player.primaryNumber}</span>
                  <span>{this.state.player.fullName}</span>
                  <span style={{"fontSize" : "0.8rem", "fontWeight": "400"}}>Pitcher</span>
                  <table>
                  <tbody>
                  <tr>
                    <td>
                      B/T:
                    </td>
                    <td>
                      {this.state.player.batSide.code}/{this.state.player.pitchHand.code}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Born:
                    </td>
                    <td>
                      {this.state.player.birthDate} ({this.state.player.currentAge})
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Height:
                    </td>
                    <td>
                      {this.state.player.height}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Weight:
                    </td>
                    <td>
                      {this.state.player.weight}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Draft:
                    </td>
                    <td>
                      {this.state.player.draftYear}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Debut:
                    </td>
                    <td>
                      {this.state.player.mlbDebutDate}
                    </td>
                  </tr>
                  </tbody>
                  </table>
                </div>
              </div>

            <div className="col-8" style={{"backgroundColor" : "red"}}>
              <div className={styles.STAT}>

              </div>
            </div>
          </div>
          </React.Fragment>
    )
  }
}

export default PlayerDetails;
