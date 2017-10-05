export class Dropdown {
    public hourList: Array<number>;
    public minuteList: Array<number>;

    constructor() {
        this.hourList = new Array<number>()
        for(let i:number = 1; i<25; i=i+1){
            this.hourList.push(i);
        }

        this.minuteList = new Array<number>();
        for(let i:number = 0; i<60; i=i+5){
            this.minuteList.push(i);
        }
    }
}