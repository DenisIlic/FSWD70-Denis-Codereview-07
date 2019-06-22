import { Component, OnInit } from '@angular/core';
import { PhonebookService  } from "../shared/phonebook.service";

@Component({
  selector: 'phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  constructor(private phonebookService: PhonebookService) { }
  submitted: boolean;
  formControls = this.phonebookService.form.controls;
  showSuccessMessage:boolean;

  ngOnInit() {
  }

  onSubmit(){
   this.submitted = true;
   if(this.phonebookService.form.valid){
           if(this.phonebookService.form.get("$key").value == null ){                    
           	this.phonebookService.insertphonebook(this.phonebookService.form.value);
             }else 
               this.phonebookService.updatePhonebook(this.phonebookService.form.value);
       this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
       this.submitted = false;
       this.phonebookService.form.reset();// the form will be empty after new record created
         } else {
                 //update
         }
   }
 }
