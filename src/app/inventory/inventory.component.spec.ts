import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { InventoryComponent } from "./inventory.component";

import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from "../material.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("InventoryComponent", () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryComponent],
      imports: [RouterTestingModule, MaterialModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
