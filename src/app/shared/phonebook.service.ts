import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private firebase: AngularFireDatabase) { }
  phonebookList: AngularFireList<any>;

  form = new FormGroup({
     $key: new FormControl(null),
     firstName: new FormControl('', Validators.required),
     lastName: new FormControl('', Validators.required), //We add Validators option and we used required so the user must fill the input
     email: new FormControl('', Validators.email), // to check if the value inside the input is an email
     mobile: new FormControl('', [Validators.required, Validators.minLength(8)]), // here we put an array because we want the user to fill the input and the input length must be at least 8
     adress: new FormControl('')
         });

  getPhonebooks(){
                 this.phonebookList = this.firebase.list('phonebooks');
                 return this.phonebookList.snapshotChanges();
         }

         insertphonebook(phonebook){
                 this.phonebookList.push({
                         firstName: phonebook.firstName,
                         lastName: phonebook.lastName,
                         email: phonebook.email,
                         mobile: phonebook.mobile,
                         adress:phonebook.adress
                  });
         }

         populateForm(phonebook){
                 this.form.setValue(phonebook);
   }

         updatePhonebook(phonebook){
           this.phonebookList.update(phonebook.$key,{
             firstName: phonebook.firstName,
             lastName: phonebook.lastName,
             email: phonebook.email,
             mobile: phonebook.mobile,
             adress: phonebook.adress
           });
         }

         deletePhonebook($key: string){
           this.phonebookList.remove($key);
         }
}
