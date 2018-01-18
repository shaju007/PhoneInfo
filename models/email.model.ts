export class Email {
    
    public name:string;
    public email:string;
    public subject:string;
    public message:string;

    constructor(name:string,email:string,subject:string,message:string){
        
        this.name=name;
        this.email=email;
        this.subject=subject;
        this.message=message;
    }
}