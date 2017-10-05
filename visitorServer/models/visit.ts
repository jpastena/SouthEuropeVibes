export class Visit{
    protected guest: string;
    protected employee: string;
    protected date: Date;

    constructor(guest: string, employee: string, date: Date){
        this.guest = guest;
        this.employee = employee;
        this.date = date;
    }
}