import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from "@angular/common/http";

import { DisplayListComponent } from './display-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('DisplayListComponent', () => {
  let component: DisplayListComponent;
  let fixture: ComponentFixture<DisplayListComponent>;
  let list = [{
		"CourseName": "Technical instructables",
		"Category": "Technical",
		"Color": "Pink"
	},
	{
		"CourseName": "Installation guide",
		"Category": "Technical",
		"Color": "Pink"
	},
	{
		"CourseName": "Career opportunities",
		"Category": "Human Resource",
		"Color": "green"
	},
	{
		"CourseName": "Customer onbording",
		"Category": "Financial",
		"Color": "lightGreen"
	},
	{
		"CourseName": "Outlet branding",
		"Category": "Marketing",
		"Color": "yellow"
	},
{
		"CourseName": "Accounting procedure",
		"Category": "Financial",
		"Color": "lightGreen"
	},
{
		"CourseName": "Training",
		"Category": "Human Resource",
		"Color": "green"
	},
{
		"CourseName": "Printing guidance",
		"Category": "Marketing",
		"Color": "yellow"
	},
{
		"CourseName": "Technical support",
		"Category": "Technical",
		"Color": "Pink"
	}


]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayListComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call filterCategory', () => {
    component.filterCategory("All")
    expect(component).toBeTruthy();
  });

  it('should call filterCategory other then all', () => {

    component.holdListName = list
    fixture.detectChanges();
    component.filterCategory("Human Resource")
    expect(component.filterCategory).toBeDefined();


  });

  it('should call getTextFilterData', () => {
    component.filter = "abc"
    component.holdListName = list
    fixture.detectChanges();
    component.getTextFilterData()
    expect(component.getTextFilterData).toBeDefined();
  });

  it('should call ngOnint ', () => {
    component.ngOnInit()
    expect(component.ngOnInit).toBeDefined();

  });
});
