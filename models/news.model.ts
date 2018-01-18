export class News {
    
    public imagePath:any;
    public title:string;
    public body:string;
    public description:string;

    constructor(imagePath:any,title:string,body:string,desc:string){
        
        this.imagePath=imagePath;
        this.title=title;
        this.body=body;
        this.description=desc;
    }
}