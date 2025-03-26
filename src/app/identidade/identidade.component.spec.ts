import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadeComponent } from './identidade.component';

describe('IdentidadeComponent', () => {
  let component: IdentidadeComponent;
  let fixture: ComponentFixture<IdentidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
