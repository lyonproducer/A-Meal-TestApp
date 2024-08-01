import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent {

  @Input() url?: string;
  @Input() title?: string;

  constructor(
    public navController: NavController,
    private router: Router
  ) {}

  goBack() {
    if (this.url) {
      this.router.navigateByUrl(this.url);
    } else {
      this.navController.back();
    }
  }

}
