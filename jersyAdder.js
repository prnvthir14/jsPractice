//given the following object,  write a function that asks the user to enter their name, size jersey # 
// name and jersey num should be unique 
let jerseyList = [

  {name:'sean saa', size:'L', kitNum:1},
  {name:'sean sab', size:'L', kitNum:2},
  {name:'sean sac', size:'L', kitNum:3},
  {name:'sean sad', size:'L', kitNum:4},
  {name:'sean sae', size:'L', kitNum:5},

]

// we can get the user input from process.argv.slice(2)
const playerDetails = process.argv.slice(2)
console.log('playerDetails',playerDetails)
//store them in these vars;
const playerName = playerDetails[0];
const playerSize = playerDetails[1];
const playerNumber = playerDetails[2];

const getPlayerKitDetails = (name, size, number) => {

  //create insertObject
  const insertObject = {{name, size, number}}

  //need to check that Name and number are unique before adding new entry to jerseyList
  for (let player in jerseyList[0]){

    if(playerName !== player.name || playerNumber !== player.kitNum){


    } else {
      
    }



  }


}