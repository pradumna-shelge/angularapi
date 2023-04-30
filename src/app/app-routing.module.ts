import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincomComponent } from './maincom/maincom.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:MaincomComponent},
  {path:':id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
