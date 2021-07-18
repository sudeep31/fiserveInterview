import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  listName: any = [];
  holdListName: any;
  filter: any;
  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/list.json").subscribe(data => {
      console.log(data);
      this.listName = data;
      this.holdListName = data;
      console.log(this.listName)
    }),
      (error: any) => console.log('oops', error)
  }

  filterCategory(data: any) {

    if (data != "All") {
      this.listName = this.holdListName.filter((x: any) => x.Category == data)

    } else {
      this.listName = this.holdListName
    }

  }

  getTextFilterData(): void {
    if (this.filter && this.filter != "") {
      this.listName = this.holdListName.filter((x: any) => x.CourseName.indexOf(this.filter) != -1)
    } else {
      this.listName = this.holdListName
    }
  }

  trackByCourseName(index: number, list: any): string {
    return list.CourseName;
  }

}
