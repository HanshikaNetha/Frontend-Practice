import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-laptop-as-object',
  imports: [],
  templateUrl: './laptop-as-object.html',
  styleUrl: './laptop-as-object.css',
})
export class LaptopAsObject {
  @Input() laptopObj={id:999, name:"default", price:0, model:'zzz'}
  // @Output() UpdateLaptop=new EventEmitter<any>()

  constructor(){
    console.log("constructor")
    console.log(this.laptopObj.id+" "+this.laptopObj.name+" "+this.laptopObj.price+" "+this.laptopObj.model)
  }
  ngOnInit(){
    console.log("after intializtion the child ")
    console.log(this.laptopObj.id+" "+this.laptopObj.name+" "+this.laptopObj.price+" "+this.laptopObj.model)
  }

  // informParent(){
  //   this.UpdateLaptop.emit(this.laptopObj.id+" "+ this.laptopObj.price)
  // }

}
