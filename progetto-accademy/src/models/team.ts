import { Match } from './match';
import { Player } from './player';

export class Team{
    constructor(public area: string , public address : string , public clubColor: string,
        public crustUrl : string, public mail : string , public foundedYear : number ,
        public idTeam: number, public name:string, public phone : string , public shortName:string,
        public players:Player[] , public tla:string , public venue:string, public webSite:string,
        public matches: Match[] ){}

} 