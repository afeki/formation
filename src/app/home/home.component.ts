import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    const x = 'Hello';
    const y = `${x}  word`;
  }

  ngOnInit() {
    $("button").click(function(){
      $("p").hide();
    });
  }

}
