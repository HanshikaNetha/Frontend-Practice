import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitService } from '../../fruit';

@Component({
  selector: 'app-fruit',
  imports: [FormsModule],
  templateUrl: './fruit.html',
  styleUrl: './fruit.css',
})
export class Fruit {
  fruit: string=''
  fruitService=inject(FruitService)
  // fruits: string[]=[]
  // addfruit(){
  //   this.fruits.push(this.fruit)
  // }
  

}
