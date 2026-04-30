import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { CdrChild } from '../cdr-child/cdr-child';

@Component({
  selector: 'app-cdr-parent',
  imports: [CdrChild],
  templateUrl: './cdr-parent.html',
  styleUrl: './cdr-parent.css',
})
export class CdrParent {
  constructor(private cdr: ChangeDetectorRef ){

  }
  something(){
    this.cdr.detectChanges()
  }
  count=signal(0)
  increment(){
    this.count.update(i=>i+1)
  }
}
