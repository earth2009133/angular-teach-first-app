export class Card {
    firstName:string;
    lastname:string;
    votes:number;
    constructor(
        firstName:string,
        lastname:string,
        votes:number
    ){
        this.firstName = firstName;
        this.lastname = lastname;
        this.votes = votes;
    }
    get name():string{
        return this.firstName + " "+ this.lastname;
    }
}