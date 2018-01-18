import { Phone } from "./phone.model";

export class Brand {
    //public id:number;

    public name:string;
    public phones:Phone[];

    

    constructor(name:string,phones:Phone[]){
    
    
        this.name=name;
        this.phones=phones;
    

    }
}