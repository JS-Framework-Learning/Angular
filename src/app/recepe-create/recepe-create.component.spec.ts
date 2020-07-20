import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepeCreateComponent } from './recepe-create.component';

describe('RecepeCreateComponent', () => {
  let component: RecepeCreateComponent;
  let fixture: ComponentFixture<RecepeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
