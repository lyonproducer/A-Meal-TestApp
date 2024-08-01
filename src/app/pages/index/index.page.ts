import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  search: string = '';
  constructor() { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories () {

  }

}
