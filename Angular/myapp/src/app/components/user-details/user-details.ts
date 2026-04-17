import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  @Input() name='Default'
  @Input() age=0
  @Input() address='dmm'
  @Input() gender='m'

  @Output() onUpdate=new EventEmitter<any>()

  constructor(){
    console.log("in constructor of user details")
    console.log(this.name+" "+this.age+" "+this.address+" "+this.gender)
  }
  ngOnInit(){
    console.log("in ngOnInit of user details")
    console.log(this.name+" "+this.age+" "+this.address+" "+this.gender)
  }

  informParent(){
    this.onUpdate.emit({name: this.name, age: this.age, address: this.address, gender: this.gender})
  }
}

