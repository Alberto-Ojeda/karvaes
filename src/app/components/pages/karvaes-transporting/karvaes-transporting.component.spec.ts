import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarvaesTransportingComponent } from './karvaes-transporting.component';

describe('KarvaesTransportingComponent', () => {
  let component: KarvaesTransportingComponent;
  let fixture: ComponentFixture<KarvaesTransportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarvaesTransportingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarvaesTransportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
