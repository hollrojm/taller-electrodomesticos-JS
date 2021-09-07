import Appliance from "./Appliances.js";

export default class Television extends Appliance{
    
    constructor(optOrigin, consumption, withTdt, inches){

        super(optOrigin, consumption)
        this.withTdt = withTdt;
        this.inches = inches
        this.priceBasicTv();
        
    }
     calculateInches(){
        let inches = 0;
        if (inches>40){
            return super.price*0.3;
        }
    }
     calculateTdt(){
        let withTdt = 0;
        if(withTdt){
            withTdt = 2500;
            return withTdt;
        }
        
    }
    priceBasicTv(){
        let priceTotal = super.calcBasePrice()+this.calculateTdt()+this.calculateInches();
        return priceTotal;
    }
    

}