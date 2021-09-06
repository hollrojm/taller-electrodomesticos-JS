import { Appliances } from (`./Appliances`);

export default class Refrigerator extends Appliances{

    constructor(optOrigin, consumption, capacity){

        super(optOrigin, consumption)
        this.capacity = capacity;
        this.calcBasePrice();

    }

    get calcForCapacity(){

        let 

        if (this.capacity > 120){
            this.capacity=(((this.capacity - 120)*5) / 100);
        }else {
            this.capacity = 0;
        }
    }
    calcForCapacity(){
        this.calcForCapacity();
    }

}

