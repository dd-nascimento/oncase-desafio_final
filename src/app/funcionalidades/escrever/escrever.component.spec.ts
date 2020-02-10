import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscreverComponent } from './escrever.component';

describe('EscreverComponent', () => {
  let component: EscreverComponent;
  let fixture: ComponentFixture<EscreverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscreverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscreverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
