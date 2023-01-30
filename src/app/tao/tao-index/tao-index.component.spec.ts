import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoIndexComponent } from './tao-index.component';

describe('TaoIndexComponent', () => {
  let component: TaoIndexComponent;
  let fixture: ComponentFixture<TaoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaoIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
