import { Component, OnInit } from '@angular/core';
import { Contact, contacts } from './contacts-data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contactsData: Contact[];

  constructor() {

    this.contactsData = contacts;
  }

  ngOnInit(): void {
  }
}
