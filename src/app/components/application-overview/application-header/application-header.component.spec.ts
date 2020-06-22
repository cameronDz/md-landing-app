import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';

import { ApplicationHeaderComponent } from './application-header.component';
import { CollapsibleIconComponent } from './collapsible-icon/collapsible-icon.component';

describe('ApplicationHeaderComponent', () => {
  let component: ApplicationHeaderComponent;
  let fixture: ComponentFixture<ApplicationHeaderComponent>;
  const testConfig: TestModuleMetadata = {
    declarations: [
      ApplicationHeaderComponent,
      CollapsibleIconComponent
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfig).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
