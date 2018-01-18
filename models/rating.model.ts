export class Rating {
    
    public like:boolean;
    public dislike:boolean;;
    public uid:string;
    public model:string;

    constructor(like:boolean,dislike:boolean,uid:string,model:string){
        
        this.like=like;
        this.dislike=dislike;
        this.uid=uid;
        this.model=model;
    }
}