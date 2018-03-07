import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlHeaderComponent } from './html-header.component';

describe('HtmlHeaderComponent', () => {
  let component: HtmlHeaderComponent;
  let fixture: ComponentFixture<HtmlHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
