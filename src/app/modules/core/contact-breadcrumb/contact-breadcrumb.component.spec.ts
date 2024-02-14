import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBreadcrumbComponent } from './contact-breadcrumb.component';

describe('ContactBreadcrumbComponent', () => {
  let component: ContactBreadcrumbComponent;
  let fixture: ComponentFixture<ContactBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
