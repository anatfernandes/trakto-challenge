import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CoursewareAllComponent } from "./courseware-all.component";

describe("CoursewareAllComponent", () => {
  let component: CoursewareAllComponent;
  let fixture: ComponentFixture<CoursewareAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursewareAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursewareAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
