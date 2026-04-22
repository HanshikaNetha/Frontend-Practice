import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagenation-comp',
  imports: [  FormsModule],
  templateUrl: './pagenation-comp.html',
  styleUrl: './pagenation-comp.css',
})
export class PagenationComp {
  @Input() customers:any[]=[]

  @Input() max=7
  @Output() onpagechange=new EventEmitter<number>();
  currentPage=1
  numbers:number[]=[]

  ngOnInit(){
    
  }
  ngOnChanges(){
    this.numbers=[]
    for(let i=1; i<=this.max; i++){
      this.numbers.push(i)
    }
  }

  emitPageevent(num: number){
    this.currentPage=num;
    this.onpagechange.emit(num)
  }

}
