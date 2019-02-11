import { Match } from './match';
import { Player } from './player';

export class Team{
    public area: string ;
    public address : string ; 
    public clubColor: string;
    public crustUrl : string; 
    public mail : string ; 
    public foundedYear : string ;
    public idTeam: string; 
    public name:string; 
    public phone : string ; 
    public shortName:string;
    public players: Player[] ; 
    public tla:string ; 
    public venue:string; 
    public webSite:string;
    public matches: Match[];

    constructor(){}

} 