import { Component, Input } from '@angular/core';
import { PagenationComp } from '../pagenation-comp/pagenation-comp';
import { FormsModule } from '@angular/forms';
import { debounceTime, filter, Subject } from 'rxjs';
import { BodyComp } from '../body-comp/body-comp';

@Component({
  selector: 'app-search-comp',
  imports: [PagenationComp, FormsModule, BodyComp],
  templateUrl: './search-comp.html',
  styleUrl: './search-comp.css',
})
export class SearchComp {
  @Input() customers: any[]= []

  searchValue=""
  editted:any[]= []

  searchSubject=new Subject<String>()
  filterCust(value:String){
    this.editted=this.editted.filter(i=>i.name.toLowerCase().includes(value.toLowerCase()))
  }
  ngOnInit(){
    this.editted=[...this.customers]
    this.searchSubject.pipe(debounceTime(500)).subscribe(i=>{
      this.filterCust(i)
      
      this.currentPage=1
      this.setMax()
      this.updatePageData()
    });
    this.setMax()
    this.updatePageData()

    
  }
  searchedCustomers(){
    this.searchSubject.next(this.searchValue)
  }

  pageSize=5
  max=0
  setMax(){
    this.max=Math.ceil(this.editted.length/this.pageSize)
  }
  pagechnaged(num: number){
    console.log("page chnaged to "+num)
    this.currentPage=num
    this.updatePageData()
  }

  AfterPageCustomers:any[]=[]
  currentPage=1

  updatePageData(){
    let start=(this.currentPage-1)*this.pageSize
    let end=start+this.pageSize
    this.AfterPageCustomers=this.editted.slice(start, end)
  }

}
