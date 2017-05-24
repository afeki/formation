import { FormationService } from './../../shared/services/formation.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFormComponent } from './formation-form.component';
import { CommonModule } from "@angular/common/src/common";
import { FormationRoutingModule } from "app/formation/formation-routing.module";
import { SharedModule } from "app/shared/shared.module";

describe('FormationFormComponent', () => {
  let component: FormationFormComponent;
  let fixture: ComponentFixture<FormationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationFormComponent ],
      imports: [
    FormationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule],
      providers: [FormationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
