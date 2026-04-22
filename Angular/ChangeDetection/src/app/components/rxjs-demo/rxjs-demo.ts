import { Component, ElementRef, ViewChild } from '@angular/core';
import {  debounceTime, filter, from, fromEvent, interval, map, of, take } from 'rxjs';
import { CdrChild } from '../cdr-child/cdr-child';

@Component({
  selector: 'app-rxjs-demo',
  imports: [CdrChild],
  templateUrl: './rxjs-demo.html',
  styleUrl: './rxjs-demo.css',
})
export class RxjsDemo {
  @ViewChild('rxInput') inputEl!: ElementRef

  ngOnInit(){
    let obs= of(1, 2, 3);
    obs.subscribe(data=>console.log(data))
    
    let obs2=from(['apple', 'banana', 'orange'])
    obs2.pipe(filter(i=>i.includes('e'))).subscribe(i=>console.log("filtered item:"+i))

    interval(1000).pipe(take(10)).subscribe(i=>console.log(i))
  }

  ngAfterViewInit(){
    fromEvent(this.inputEl.nativeElement, 'input')
    .pipe(debounceTime(500))
    .pipe(map(i=>this.inputEl.nativeElement.value))
    .subscribe(event=>console.log(event))
  }
}
