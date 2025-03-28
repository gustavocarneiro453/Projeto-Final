import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusDocumentosComponent } from './meus-documentos.component';

describe('MeusDocumentosComponent', () => {
  let component: MeusDocumentosComponent;
  let fixture: ComponentFixture<MeusDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusDocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
