export class Ureview {
    
    public name:string;
    public comment:string;
    public uid:string;
    public model:string;
    public date:string;

    constructor(name:string,comment:string,uid:string,model:string,date:string){
        
        this.name=name;
        this.comment=comment;
        this.uid=uid;
        this.model=model;
        this.date=date;
    }
}