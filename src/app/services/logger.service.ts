import { EventEmitter, Injectable } from "@angular/core";


@Injectable()
export class LoggerService {
    log(message: string) {
        console.log(new Date().toDateString() + " : " + message);
    }

    notify:EventEmitter<string>= new EventEmitter<string>();
}