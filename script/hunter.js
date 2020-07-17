class Hunter extends Traveler{
    constructor(name){
        super()
        this.name=name
        this.food = 2
        this.isHealthy = true
    }
    hunt(){
        this.food += 5
    }
    eat(){
        if(this.food >0){
            this.food -= 2
        }
        if(this.food <2){
            this.food = 0
            this.isHealthy =false
        }
    }
    giveFood(traveler, numberofFoodUnits) {
        if(this.food > numberofFoodUnits){
            this.food -= numberofFoodUnits
            traveler.food += numberofFoodUnits
        }
    }
}