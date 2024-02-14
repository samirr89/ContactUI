import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSystemComponent } from './contact-system.component';

describe('ContactSystemComponent', () => {
  let component: ContactSystemComponent;
  let fixture: ComponentFixture<ContactSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
