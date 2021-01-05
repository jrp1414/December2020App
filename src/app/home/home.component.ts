import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
//import { Observable, Subscription } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {
  //numsSubscription:Subscription;
  // testSubscription: Subscription;
  subsSubscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    // let numObs = Observable.interval(1000);

    // this.numsSubscription = numObs.subscribe((num)=>{
    //   console.log(num);
    // });

    // let obs = new Observable((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next("First Data Received");
    //   }, 1000);

    //   setTimeout(() => {
    //     observer.next("Second Data Received");
    //   }, 3000);

    //   setTimeout(() => {
    //     observer.next("Third Data Received");
    //   }, 5000);

    //   // setTimeout(() => {
    //   //   observer.error("Error Occurred");
    //   // }, 6000);

    //   setTimeout(() => {
    //     observer.complete();
    //   }, 6000);

    //   setTimeout(() => {
    //     observer.next("Fourth Data Received");
    //   }, 7000);

    // });

    //this.testSubscription = obs.subscribe((data) => { console.log(data) }, (error) => { console.error(error) }, () => { console.info("Completed") });

    let subs = new Subject();
    setTimeout(() => {
      subs.next("First Subject Received");
    }, 1000);

    setTimeout(() => {
      subs.next("Second Subject Received");
    }, 3000);
    setTimeout(() => {
      subs.next("Third Subject Received");
    }, 5000);

    setTimeout(() => {
      subs.error("Error Occured");
    }, 6000);

    this.subsSubscription = subs.subscribe((data) => { console.log(data) }, (error) => { console.error(error) });
  }

  ngOnDestroy(): void {
    //this.numsSubscription.unsubscribe();    
    //this.testSubscription.unsubscribe();
    this.subsSubscription.unsubscribe();
  }
}
