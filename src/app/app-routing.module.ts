import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhonebookComponent} from "./phonebook/phonebook.component";
import {ImportantNumbersComponent} from "./important-numbers/important-numbers.component";

const routes: Routes = [
{
	path:"phonebook", component: PhonebookComponent
},
{
	path:"important-numbers", component: ImportantNumbersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
