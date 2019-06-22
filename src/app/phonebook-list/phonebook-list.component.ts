import { Component, OnInit } from '@angular/core';
import { PhonebookService } from "../shared/phonebook.service";

@Component({
  selector: 'app-phonebook-list',
  templateUrl: './phonebook-list.component.html',
  styleUrls: ['./phonebook-list.component.css']
})
export class phonebookListComponent implements OnInit {
	phonebookArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";


  constructor(private phonebookService: PhonebookService) { }

  ngOnInit() {
  		this.phonebookService.getPhonebooks().subscribe(
                 (list) => {
                         this.phonebookArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
  }

  onDelete($key){
    if(confirm("Are you sure you want to delete this record?")){
      this.phonebookService.deletePhonebook($key);
      this.showDeletedMessage = true;
      setTimeout(()=> this.showDeletedMessage = false, 3000)
    }
  }

  filterCondition(phonebook){


    return phonebook.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
    phonebook.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
    phonebook.adress.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
    phonebook.mobile.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;

  }
}
