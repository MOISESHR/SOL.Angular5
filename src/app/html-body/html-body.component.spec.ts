import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBodyComponent } from './html-body.component';

describe('HtmlBodyComponent', () => {
  let component: HtmlBodyComponent;
  let fixture: ComponentFixture<HtmlBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
