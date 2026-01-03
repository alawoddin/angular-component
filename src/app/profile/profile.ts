import { Component, Input, OnChanges, SimpleChanges , OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile implements OnChanges  {

  @Input() pUserName: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log("hello world");
  }

  ngOnint() {
    console.log("this is on int change")
  }

}
