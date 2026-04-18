import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LaptopAsObject } from './components/laptop-as-object/laptop-as-object';
import { FormsModule } from '@angular/forms';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LaptopAsObject, FormsModule, DatePipe, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'laptop';

  laptops=[
    {"id":101, "name":"dell", "price":300, "model":"abc"},
    {"id":102, "name":'hp', "price":400, "model":"xyz"},
    {"id":103, "name":'lenovo', "price":400, "model":'pqr'},
    {"id":104, "name":'asus', "price":500, "model":'adc'},
    {"id":105, "name":'apple', "price":1000, "model":'mac'},
    {"id":106, "name":'acer', "price":600, "model":'fuh'},
    {"id":107, "name":"dell1", "price":350, "model":"abc01"},
    {"id":108, "name":'hp1', "price":450, "model":"xyz01"},
    {"id":109, "name":'lenovo1', "price":430, "model":'pqr01'},
    {"id":110, "name":'asus1', "price":550, "model":'adc01'},
    {"id":111, "name":'apple1', "price":1050, "model":'mac01'},
    {"id":112, "name":'acer1', "price":650, "model":'fu01'}
  ]


  currentindex=0
  pagesize=3
  previous(){
    console.log("asked to show previous laptops")
    if(this.currentindex>0){
      this.currentindex=this.currentindex-this.pagesize
    }
  }

  next(){
    console.log("asked to show next laptops")
    if(this.currentindex<this.laptops.length){
      this.currentindex=this.currentindex+this.pagesize
    }
    
  }

  visibleLaptops(){
    this.laptops=this.laptops.slice(this.currentindex, this.currentindex+this.pagesize)
  }

  today = new Date();

  highlighted=false

  highlight(){
    this.highlighted=!this.highlighted
  }

  clr=""
  highlight2(){
    this.clr=this.clr=="pink"?"":"pink"
  }

  like="hello"
  // changeValue(event: any){
  //   console.log("event", event.target.value)
  //   this.like=event.target.value
  //   console.log()
  // }

}


