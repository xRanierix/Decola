import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprofComponent } from './listaprof.component';

describe('ListaprofComponent', () => {
  let component: ListaprofComponent;
  let fixture: ComponentFixture<ListaprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
