import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLineComponent } from './item-line.component';

describe('ItemLineComponent', () => {
  let component: ItemLineComponent;
  let fixture: ComponentFixture<ItemLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
