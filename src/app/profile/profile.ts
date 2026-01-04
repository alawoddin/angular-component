import { Component, Input, OnChanges, SimpleChanges , OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-profile',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile implements OnChanges, DoCheck , OnInit , AfterContentInit, AfterContentChecked , AfterViewInit , OnDestroy ,  AfterViewChecked   {

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

  ngAfterContentInit(): void {
    console.log("after content is user")
  }

  ngDoCheck() {
    console.log("ngdocheck samething")
  }
  counter: number = 0;

  changebutton() {
    this.counter ++;
  }

  ngAfterContentChecked(): void {
    console.log("after content check the user")
  }

  ngAfterViewInit() {
    console.log("check the user view")
  }

  ngAfterViewChecked(): void {
    console.log('check the the after view is working or not ')
  }

  ngOnDestroy(): void {
    console.log("before you delete the item its call")
  }
 

}
