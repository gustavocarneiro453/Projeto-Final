import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnhComponent } from './cnh.component';

describe('CnhComponent', () => {
  let component: CnhComponent;
  let fixture: ComponentFixture<CnhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
