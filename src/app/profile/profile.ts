import { Component, Input, OnChanges, SimpleChanges , OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile implements OnChanges, DoCheck , OnInit   {

  constructor() {
    console.log("this is for demo ")
    console.log(this.pUserName)
  }
 
  ngOnInit() {
    console.log("this is on int change")
  }

  @Input() pUserName: string = '';

   

  ngOnChanges(changes: SimpleChanges): void {
    console.log("hello world");
  }

  ngDoCheck() {
    console.log("ngdocheck samething")
  }
  counter: number = 0;

  changebutton() {
    this.counter ++;
  }
 

}
