import Appliance from "./Appliances.js";

export default class Refrigerator extends Appliance{

    constructor(optOrigin, consumption, capacity){

        super(optOrigin, consumption)
        this.capacityValue = capacity;
        this.calcBasePrice();

    }

    get calcForCapacity(){


        if (this.capacity > 120){
            this.capacity=(((this.capacity - 120)*5) / 100);
        }else {
            this.capacity = 0;
        }
    }
    calcCapacity(){
        this.calcForCapacity();
        this.capacityValue = this.price * this.capacity;
        return this.capacityValue;
    }
    
    calcBasePrice(){
        super.calcBasePrice();
        return this.price + this.calcCapacity();
    }

}

