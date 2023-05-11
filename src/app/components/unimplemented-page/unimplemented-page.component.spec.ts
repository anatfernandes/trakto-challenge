import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UnimplementedPageComponent } from "./unimplemented-page.component";

describe("UnimplementedPageComponent", () => {
  let component: UnimplementedPageComponent;
  let fixture: ComponentFixture<UnimplementedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnimplementedPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnimplementedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
