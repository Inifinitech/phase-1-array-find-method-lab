const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
//function to single out a specific result in game record data

function superbowlWin(record) {
   function timesWon(bowling) {
    if (bowling.result === "W") {
        return true;
    }else {
        return false;
    }
   }
//find method to search for the first win
   const recordedWins = record.find(timesWon)
//if statement to return the year won if the win is found
   if (recordedWins) {
    return recordedWins.year;
   }else {
    return undefined;
   }
}