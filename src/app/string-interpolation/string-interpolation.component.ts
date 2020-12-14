import { Component } from "@angular/core";

@Component({
    selector: "app-si",
    // template:"<h3>String Interpolation Component Created</h3>"
    templateUrl: "./string-interpolation.component.html"
})
export class StringInterpolationComponent {

    num1 = 10;
    num2: number = 5;
    flag: boolean = true;
    name: string = "Ram";
    name2: any = "Sharma";
    person: Person;

    constructor() {
        this.person = new Person();
        this.person.name = "Amol";
        this.person.address = "Pune";
        this.person.age = 25;
    }

    getName(): string {
        return this.name+" "+this.name2;
    }
}


export class Person {
    name: string;
    address: string;
    age: number;
}