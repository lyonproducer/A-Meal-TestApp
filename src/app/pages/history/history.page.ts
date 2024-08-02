import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';
import { History } from 'src/app/shared/interfaces/history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {


  histories: History[] = [];

  constructor(
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getHistory();
  }

  async getHistory() {
    this.histories = await this.storage.get('histories') ?? [];
  }

  clearHistory() {
    this.storage.clear();
    this.getHistory();
  }

  goMealDetail(history: History) {
    this.router.navigate(['details', history.searchValue]);
  }
}
