import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-comp',
  imports: [DatePipe],
  templateUrl: './body-comp.html',
  styleUrl: './body-comp.css',
})
export class BodyComp {
  @Input() cutomers:any[]=[]
}
