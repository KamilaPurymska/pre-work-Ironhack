var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[]
}


function turnLeft(rover){
  switch (rover.direction) {
  case 'N':
  rover.direction ='W'
  break;
  case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
  console.log("Turn left! New direction: " + rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log("Turn right! New direction: " + rover.direction);
}

function moveForward(rover){
  var prex= rover.x;
  var prey=rover.y;

  switch (rover.direction) {
    case 'N':
      rover.y--;
      break;
    case 'S':
      rover.y++;
      break;
    case 'E':
      rover.x++;
      break;
    case 'W':
      rover.x--;
      break;
  }
  if (prex===rover.x
    rover.travelLog.push([prevX])
  console.log("Move forward! Direcrion:" + rover.direction + "coordinations x= " + rover.x + "y=" + rover.y)
}


function listCommand(command){
  for (var i=0 ; i<command.lenght ; i++) {
    switch (command[i]) {
      case 'f':
        moveForward(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;}}}

moveForward(rover);
console.log(rover);