import Appliance from "./Appliances.js";

export default class Refrigerator extends Appliance{

    constructor(optOrigin, consumption, capacity){

        super(optOrigin, consumption)
        this.capacityValue = this.calculateForCapacity();
        this.capacity= capacity;
        this.price = this.calculateTotalPrice();

    }

    calculateForCapacity(){
        
        if (this.capacity > 120){
            this.capacity=(((this.capacity - 120)*5/10) / 100);
            
        }else {
            this.capacity = 0;
        }
        return this.capacity;
        
    }
    
    calculateCapacity(){
        this.calculateForCapacity();
        this.capacityValue = this.price * this.capacity;
        return this.capacityValue;
    }
    
     calculateTotalPrice(){
        
        return super.calcBasePrice() + this.calculateCapacity();
    }

}

