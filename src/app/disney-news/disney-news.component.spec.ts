import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyNewsComponent } from './disney-news.component';

describe('DisneyNewsComponent', () => {
  let component: DisneyNewsComponent;
  let fixture: ComponentFixture<DisneyNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisneyNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisneyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
