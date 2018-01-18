export class Review {
    
    public imagePath:any;
    public model:string;
    public body:string;
    public performance:string;
    public perImagePath:any;
    public hardware:string;
    public software:string;
    public display:string;
    public camera:string;
    public battery:string;

    constructor(imagePath:any,model:string,body:string,performance:string,perImagePath:any,hardware:string,software:string,display:string,camera:string,battery:string){
        
        this.imagePath=imagePath;
        this.model=model;
        this.body=body;
        this.performance=performance;
        this.perImagePath=perImagePath;
        this.hardware=hardware;
        this.software=software;
        this.display=display;
        this.camera=camera;
        this.battery=battery;
    }
}