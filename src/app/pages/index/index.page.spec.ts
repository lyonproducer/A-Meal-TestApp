import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexPage } from './index.page';
import { DebugElement, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from 'src/app/core/services/storage.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { MealService } from 'src/app/core/services/meal.service';
import { HttpClientModule } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

describe('IndexPage', () => {
  let component: IndexPage;
  let fixture: ComponentFixture<IndexPage>;
  let submitEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [importProvidersFrom(HttpClientModule), Storage]
    });
    fixture = TestBed.createComponent(IndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be search button disabled if input is void', () => {
    component.search = '';
    fixture.detectChanges();
    expect(submitEl.nativeElement.querySelector('ion-button').disabled).toBeTruthy();
  });

  it('should be search button activated if input has string length more than one', () => {
    component.search = 'Big Mac';
    fixture.detectChanges();
    expect(submitEl.nativeElement.querySelector('ion-button').disabled).toBeFalsy();
  });
});
