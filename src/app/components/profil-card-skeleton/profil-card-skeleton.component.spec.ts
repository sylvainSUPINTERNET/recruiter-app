import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCardSkeletonComponent } from './profil-card-skeleton.component';

describe('ProfilCardSkeletonComponent', () => {
  let component: ProfilCardSkeletonComponent;
  let fixture: ComponentFixture<ProfilCardSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilCardSkeletonComponent]
    });
    fixture = TestBed.createComponent(ProfilCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
