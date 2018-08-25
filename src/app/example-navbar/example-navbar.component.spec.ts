
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNavbarComponent } from './example-navbar.component';

describe('ExampleNavbarComponent', () => {
  let component: ExampleNavbarComponent;
  let fixture: ComponentFixture<ExampleNavbarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
