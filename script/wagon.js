class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.passengers =[]
    }

    getAvailableSeatCount(){
        return this.capacity -this.passengers.length
    }

    join(Traveler){
        if(this.getAvailableSeatCount()> 0){
            this.passengers.push(Traveler)
        }
    }
    shouldQuarantine(){
        
        for(let counter =0; counter <this.passengers.length; counter++){
            if(this.passengers[counter].isHealthy === false){
                return true
            }
        }
                return false
                
            }
            
        
   


   
totalFood(){
    
    let allFood = this.passengers.reduce((sum, passengers) => {
        let counter = sum + passengers.food
        console.log(counter)
         return counter
    },0)
    return allFood
}
}







