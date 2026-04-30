import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { TruncatePipe } from '../../truncate-pipe';

@Component({
  selector: 'app-iterinary',
  imports: [TruncatePipe],
  templateUrl: './iterinary.html',
  styleUrl: './iterinary.css',
})
export class Iterinary implements OnChanges{
  @Input() eachtour={id:0, place: "default", days:0, cost: 0, description:"shut up"}

  @Input() isAllOpen:boolean=false

  @ViewChild('desc') descripElement!: ElementRef

  ngAfterViewInit() {
    console.log("ViewChild:", this.descripElement);
  }                                      

  ngOnChanges(changes: SimpleChanges){
    if(changes['isAllOpen']){
      this.isSingleOpen=this.isAllOpen
    }
  }
  

  truncLength=6
  changeLenght(){
    let fullLength = this.eachtour.description.length;
    console.log(fullLength)
    if(this.truncLength!=fullLength){
      this.truncLength=fullLength
    }else{
      this.truncLength=6
    }
  }

  isSingleOpen=false
  changeOpen(){
    this.isSingleOpen=!this.isSingleOpen
  }
}
