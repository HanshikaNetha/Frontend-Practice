import {   Component } from '@angular/core';
import { CdrChild } from '../cdr-child/cdr-child';

@Component({
  selector: 'app-cdr-parent',
  imports: [CdrChild],
  templateUrl: './cdr-parent.html',
  styleUrl: './cdr-parent.css',
 
})
export class CdrParent {
  user={id:1, name:"hui"}

  changeData(){
    // this.user={id: 2, name:"jui"}
    this.user.name = "jui";
  }

}
