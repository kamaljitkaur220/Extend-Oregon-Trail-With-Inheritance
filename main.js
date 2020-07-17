




const main= document.querySelector("main")
let travlerCounter = document.createElement("div")
travlerCounter.id = 'wagon'
main.append(travlerCounter)
travlerCounter.append(JSON.stringify(wagon))

let seats = document .createElement("div")
seats.id ="wagonCapacity"
seats.append('Seats available: ',' ', wagon.getAvailableSeatCount())
main.append(seats)

let food = document.createElement('div')
food.id = 'totalFood'
food.append('Total food :',' ', wagon.totalFood())
main.append(food)

let quarentine = document.createElement('div')
quarentine.id = 'shouldQuarentine'
quarentine.append('shouldQuarentine:',' ', wagon.shouldQuarantine())
main.append(quarentine)