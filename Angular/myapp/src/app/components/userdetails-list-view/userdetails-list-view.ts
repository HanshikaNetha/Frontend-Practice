import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-userdetails-list-view',
  imports: [],
  templateUrl: './userdetails-list-view.html',
  styleUrl: './userdetails-list-view.css',
})
export class UserdetailsListView {
  @Input() name='Default'
  @Input() age=0
  @Input() address="fu"
  @Input() gender='others'
  @Output() sendToParent=new EventEmitter<any>()

  constructor(){
    console.log("in constructor of user details list view")
    console.log(this.name+" "+this.age+" "+this.address+" "+this.gender)
  }

  UpdateUser(){
    this.update=true
    let currentage=document.getElementById("currentAge")
    this.sendToParent.emit({name:this.name, age: currentage})
  }

  update: boolean=false
  
}

