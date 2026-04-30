import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cdr-child',
  imports: [],
  templateUrl: './cdr-child.html',
  styleUrl: './cdr-child.css',
})
export class CdrChild {
  count=input(0)
}
