import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepComponentComponent } from './deep-component.component';

describe('DeepComponentComponent', () => {
  let component: DeepComponentComponent;
  let fixture: ComponentFixture<DeepComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeepComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
