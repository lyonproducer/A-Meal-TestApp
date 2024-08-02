import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    protected platform: Platform,
    private storage: StorageService
  ) {
    this.platform.ready().then(async () => {
      await this.storage.init();
    });
  }
}
