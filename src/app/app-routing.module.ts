import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PerentComponent } from './component/perent/perent.component';
import { ChildComponent } from './component/child/child.component';
import { CardComponent } from './component/card/card.component';

const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path:'child',component:ChildComponent},
  {path:'prenet',component:PerentComponent},
  {path:'card',component:CardComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
