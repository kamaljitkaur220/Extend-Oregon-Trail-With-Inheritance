class Doctor extends Traveler{
    constructor(name){
        super() 
        this.name=name
        this.food = 1
        this.isHealthy = true

    }
    heal(Traveler){
      Traveler.isHealthy =true
    }
}