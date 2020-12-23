import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  searchControl: FormControl;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);
  }

  doSearch() {
    console.log(this.searchControl.value);
  }

}
