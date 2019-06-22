import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { phonebookListComponent } from './phonebook-list.component';

describe('PhonebookListComponent', () => {
  let component: phonebookListComponent;
  let fixture: ComponentFixture<phonebookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ phonebookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(phonebookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
