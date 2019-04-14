import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubuseComponent } from './githubuse.component';

describe('GithubuseComponent', () => {
  let component: GithubuseComponent;
  let fixture: ComponentFixture<GithubuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
