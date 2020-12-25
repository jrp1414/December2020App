import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  // selector: 'app-main',
  // selector: '[app-main]',
  selector: '.app-main',
  // templateUrl: './app.component.html'
  // template:"<h1>Inline template example</h1><h2>Inline template Line 2</h2>"+
  // "<h2>Inline template Line 3</h2>"
  // template:`
  // <h1>Inline template example</h1>
  // <h2>Inline template Line 2</h2>
  // <h2>Inline template Line 3</h2>
  // `
  templateUrl:"./app.component.html",
  // styles:[
  //   `h1{
  //     background-color:aqua;
  //   }`
  // ]
  styleUrls:[
    "./app.component.css"
  ]
  // providers: [LoggerService] 
})
export class AppComponent { }
