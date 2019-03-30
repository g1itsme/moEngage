import { Component, OnInit } from '@angular/core';
import myJSON from '../app/data.json';
import { EditNameComponent } from './edit-name/edit-name.component';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'moEngage';
  private allItems: any;
  private searchItem = '';
  private searchresults = [];
  constructor(public mdDiloue: MatDialog) {
  }
  pager: any = {};

  // paged items
  pagedItems = [];
  searchItems() {
    this.pager.pages = [];
    this.searchresults = [];
    for (const i of this.allItems) {
      if (i.name.toLowerCase().indexOf(this.searchItem.toLowerCase()) > -1) {
        this.searchresults.push(i);
      }
    }
    for (let i = 1; i <= Math.floor(this.searchresults.length / 10); i++) {
      this.pager.pages.push(i);
    }
    this.setPage(1, this.searchresults);
  }
  ngOnInit() {
    // get dummy data
    this.allItems = myJSON;
    this.setPage(1, this.allItems);
    this.pager.pages = [];
    for (let i = 1; i < 11; i++) {
      this.pager.pages.push(i);
    }
  }
  changeName(id) {
    console.log(id);
    const dilogueRef = this.mdDiloue.open(EditNameComponent, {
      width: '50%',
      data: id
    });
    dilogueRef.afterClosed().subscribe((data) => {
      this.pagedItems[id].name = data.name;
      this.pagedItems[id].lastsaved = new Date();
    });
  }
  deleteComp(id) {
    this.pagedItems.splice(id, 1);
  }
  setPage(page: number, items) {
    if (!items) {
      items = this.searchItem !== "" ? this.searchresults : this.allItems;
    }
    if (page >= 0) {
      let count = 0;
      this.pagedItems = [];
      for (const i of items) {
        const index = Math.floor(count / 10);
        if (index === page - 1) {
          this.pagedItems.push(i);
        }
        count++;
      }

      this.pager.currentPage = page;
    }
  }

}
