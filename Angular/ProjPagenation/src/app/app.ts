import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComp } from './components/search-comp/search-comp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ProjPagenation';
  customers=[
    {id:101, name:"Deep", address:"dmm", email:"hani@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"female"},
    {id:102, name:"gui", address:"kurnool", email:"gui@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"},
    {id:103, name:"lui", address:"kadapa", email:"lui@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"},
    {id:104, name:"jui", address:"hyderbad", email:"jui@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"female"},
    {id:105, name:"Deepak", address:"bangalore", email:"fui@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"},
    {id:106, name:"udi", address:"jalandhar", email:"udi@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"},
    {id:107, name:"hhu", address:"phagwara", email:"hhu@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"female"},
    {id:108, name:"ugug", address:"kurnool", email:"ugug@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"},
    {id:109, name:"RajDeepak", address:"kadapa", email:"lulu@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"female"},
    {id:110, name:"hani", address:"dmm", email:"hani@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"female"},
    {id:111, name:"gurinderDeep", address:"kurnool", email:"gui@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"},
    {id:112, name:"lui", address:"kadapa", email:"lui@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"},
    {id:113, name:"jui", address:"hyderbad", email:"jui@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"female"},
    {id:114, name:"fui", address:"bangalore", email:"fui@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"},
    {id:115, name:"udiDeepak", address:"jalandhar", email:"udi@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"},
    {id:116, name:"hhu", address:"phagwara", email:"hhu@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"female"},
    {id:117, name:"ugug", address:"kurnool", email:"ugug@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"},
    {id:118, name:"lulu", address:"kadapa", email:"lulu@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"female"},
    {id:119, name:"hani", address:"dmm", email:"hani@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"female"},
    {id:120, name:"gui", address:"kurnool", email:"gui@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"},
    {id:121, name:"Deepak", address:"bangalore", email:"fui@gmail.com", phone:"1234567890", dob:new Date("2004-12-27"), gender:"male"}
  ]

}