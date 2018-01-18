export class Phone {
    public imagePath:string;
    public memory:number;
    public model:string;    
    public ram:number;
    public display:any;
    public frontCamera:number;
    public backCamera:number;
    public os:string;
    public cpu:string;
    public battery:number;
    public price:any;
    
    

    constructor(imagePath:string,memory:number,model:string,ram:number,display:any,frontCamera:number,backCamera:number,os:string,cpu:string,battery:number,price:any){
        this.imagePath=imagePath;
        this.memory=memory;
        this.model=model;
        this.ram=ram;
        this.display=display;
        this.frontCamera=frontCamera;
        this.backCamera=backCamera;
        this.os=os;
        this.cpu=cpu;
        this.battery=battery;
        this.price=price;
    
    }
}