
export default class Appliance{
    constructor(optOrigin, consumption){
        this.consumption = consumption;
        this.optOrigin = optOrigin;
        this.price = this.calcBasePrice();
    }

    getOriginValue(){
        let result = (this.optOrigin === 'Nacional') ? 250000 : 350000;
        return result;
    }

    getConsumptionValue(){
        switch(this.consumption){
            case "A":
                return  450000;
            case "B":
                return  350000;
            case "C":
                return  250000;
            default:
                return 0;         
        }
        
    
    }
     calcBasePrice(){
        let basePrice = this.getConsumptionValue() + this.getOriginValue();
        return basePrice;
    
    }

    

}