import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTittleComponent } from './card-tittle.component';

describe('CardTittleComponent', () => {
  let component: CardTittleComponent;
  let fixture: ComponentFixture<CardTittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTittleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
