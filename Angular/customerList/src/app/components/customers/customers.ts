import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customers',
  imports: [DatePipe],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  @Input() customers={id:0, name:"default", address:"nowhere", email:"abc@gmail.com", phone:"0000000000", dob:new Date("2004-12-27"), gender:"others"}

  constructor(){
    console.log("not yet initalized")
    console.log(this.customers.id+" "+this.customers.name+" "+this.customers.address+" "+this.customers.email+" "+this.customers.phone+" "+this.customers.dob+" "+this.customers.gender)
  }

  ngOnInit(){
    console.log(" initalized")
    console.log(this.customers.id+" "+this.customers.name+" "+this.customers.address+" "+this.customers.email+" "+this.customers.phone+" "+this.customers.dob+" "+this.customers.gender)
  }


}
