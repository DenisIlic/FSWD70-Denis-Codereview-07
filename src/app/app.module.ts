import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { PhonebookComponent } from './phonebook/phonebook.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { phonebookListComponent } from './phonebook-list/phonebook-list.component';
import { PhonebookService } from "./shared/phonebook.service";
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    PhonebookComponent,
    phonebookListComponent,
    ImportantNumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [PhonebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
