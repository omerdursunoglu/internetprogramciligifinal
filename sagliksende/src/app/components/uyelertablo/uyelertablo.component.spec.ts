/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UyelertabloComponent } from './uyelertablo.component';

describe('UyelertabloComponent', () => {
  let component: UyelertabloComponent;
  let fixture: ComponentFixture<UyelertabloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyelertabloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyelertabloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
