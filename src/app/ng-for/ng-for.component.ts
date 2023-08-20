import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  item_list = ["red", "yellow", "green", "black"];
  category : any = {
    id: 0,
    item_name : '',
  }
}
