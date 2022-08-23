import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BennifitsComponent } from './bennifits.component';

describe('BennifitsComponent', () => {
  let component: BennifitsComponent;
  let fixture: ComponentFixture<BennifitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BennifitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BennifitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
