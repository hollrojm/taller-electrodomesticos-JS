import Appliance from "./Appliances.js";

export default class Television extends Appliance{
    
    constructor(optOrigin, consumption, withTdt, inches){

        super(optOrigin, consumption)
        this.withTdt = withTdt;
        this.inches = inches;
        this.priceTv = this.priceTotalTv();
        
    }
     calculateInches(){
        let result = (this.inches > 40) ? super.calcBasePrice()*0.3:0;
        return result;
    }
     calculateTdt(){
        let tdtResult = (this.withTdt)?250000:0;
        return tdtResult;
        }

           
    
    priceTotalTv(){
        return  super.calcBasePrice() + this.calculateTdt()  + this.calculateInches();
        
    }
    

}