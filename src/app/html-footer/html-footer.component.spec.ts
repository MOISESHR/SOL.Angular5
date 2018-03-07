import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlFooterComponent } from './html-footer.component';

describe('HtmlFooterComponent', () => {
  let component: HtmlFooterComponent;
  let fixture: ComponentFixture<HtmlFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
