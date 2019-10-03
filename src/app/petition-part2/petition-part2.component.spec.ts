import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionPart2Component } from './petition-part2.component';

describe('PetitionPart2Component', () => {
  let component: PetitionPart2Component;
  let fixture: ComponentFixture<PetitionPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
