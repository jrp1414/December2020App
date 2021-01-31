import { HostListener, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
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
  templateUrl: "./app.component.html",
  // styles:[
  //   `h1{
  //     background-color:aqua;
  //   }`
  // ]
  styleUrls: [
    "./app.component.css"
  ]
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  constructor(private router: Router, primengConfig: PrimeNGConfig, private messageService: MessageService) {
    this.router.events.subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
          {
            this.loading = false;
            break;
          }
        case event instanceof NavigationError:
          {
            this.loading = false;
            break;
          }
        default:
          break;
      }
    });
  }
  ngOnInit(): void {

  }

  @HostListener("window:beforeunload", ['$event']) unload(event) {
    localStorage.clear();
  }

}
