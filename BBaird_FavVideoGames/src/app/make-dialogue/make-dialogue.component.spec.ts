import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDialogueComponent } from './make-dialogue.component';

describe('MakeDialogueComponent', () => {
  let component: MakeDialogueComponent;
  let fixture: ComponentFixture<MakeDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
