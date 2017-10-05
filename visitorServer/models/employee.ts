export class Employee {
    public mail: string; //primary key
    public name: string;
    
    constructor(mail: string, name: string) {
        this.mail = mail;
        this.name = name;
    }
}