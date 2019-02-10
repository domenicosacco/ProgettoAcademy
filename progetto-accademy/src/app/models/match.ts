export class Match{
    constructor(public homeTeamName: string , public awayTeamName :string , public homeTeamID: string , public awayTeamID :string , public id : string , public lastUpdated : string,
        public matchDay:number, public homeTeamScore : number, public awayTeamScore : number , public stage : string,
        public status : string , public utcDate : string ){}
}