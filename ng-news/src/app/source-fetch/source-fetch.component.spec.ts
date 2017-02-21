import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceFetchComponent } from './source-fetch.component';

describe('SourceFetchComponent', () => {
  let component: SourceFetchComponent;
  let fixture: ComponentFixture<SourceFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
