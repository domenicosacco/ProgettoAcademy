import { Match } from './match';

export class Championship{
    constructor(public infoCampionato:string , public year : number, public matches:Match[]){}
}