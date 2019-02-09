export class Match{
    constructor(public homeTeam:string , public awayTeam :string , public id : number , public lastUpdated : string,
        public matchDay:number, public homeTeamScore : number, public awayTeamScore : number , public stage : string,
        public status : string , public utcDate : string ){}
}