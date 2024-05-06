import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAbsentComponent } from './my-absent.component';

describe('MyAbsentComponent', () => {
  let component: MyAbsentComponent;
  let fixture: ComponentFixture<MyAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAbsentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
