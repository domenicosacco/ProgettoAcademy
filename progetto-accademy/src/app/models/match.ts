export class Match{

     public homeTeamName: string ; 
     public awayTeamName :string ; 
     public homeTeamID: string ; 
     public awayTeamID :string ; 
     public id : string ; 
    public lastUpdated : string;
    public matchDay:number; 
     public homeTeamScore : number; 
     public awayTeamScore : number ; 
     public homeTeamScoreHalfTime : number; 
     public awayTeamScoreHalfTime : number; 
     public homeTeamPenalties: string;
     public awayTeamPenalties: string;
     public stage : string;
     public status : string ; 
     public utcDate : string;
     public venue: string;
    constructor(){}
}