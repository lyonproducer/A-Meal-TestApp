import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss'],
})
export class HeaderHomeComponent {

  constructor(
    private router: Router
  ) { }

  goHistory() {
    this.router.navigateByUrl('/history');
  }

}
