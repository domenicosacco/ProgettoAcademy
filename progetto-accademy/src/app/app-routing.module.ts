import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaydetailComponent } from './daydetail/daydetail.component';
import { DaystableComponent } from './daystable/daystable.component';
import { MatchtableComponent } from './matchtable/matchtable.component';
import { TeamtableComponent } from './teamtable/teamtable.component';
import {TeamdetailsComponent} from './teamdetails/teamdetails.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { MatchComponent } from './match/match.component';

const routes: Routes = [
{path: 'daystable/daydetail/:id', component: DaydetailComponent},
{path: 'matchtable/matchdetail/:id', component: MatchComponent},
{path: 'teamtable/teamdetail/:id', component: TeamdetailsComponent},
{path: 'teamtable/playerdetail/:id', component: PlayerdetailsComponent},
{path: 'daystable', component: DaystableComponent},
{path: 'matchtable', component: MatchtableComponent },
{path: 'teamtable', component: TeamtableComponent},
{path: '' , redirectTo:'/daystable',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
