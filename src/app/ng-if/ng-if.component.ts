import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  title = 'Structure_Diretive_Angular';
  show_text: boolean = false;
  show_textElse: boolean = false;
  nottext: boolean = false;

  btn1: boolean = false; //red
  btn2: boolean = false //blue

  isLoggedIn: boolean = false;
  loggedOut: boolean = false;

  open: boolean = false;
  constructor() {

  }
  ngOnInit() {
    this.btn1 = true;
  }

  showText() {
    this.show_text = true;
  }

  showTextElse() {
    this.show_textElse = true;
  }

  onChangeColorRed() {
    this.btn1 = false;
    this.btn2 = true;
  }
  onChangeColorBlue() {
    this.btn1 = true;
    this.btn2 = false;
  }

  showText_1() {
    this.isLoggedIn = true;

  }
  Separate_Template() {
    this.open = true;
  }
}
