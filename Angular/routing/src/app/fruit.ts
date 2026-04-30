import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService{
  fruits=signal<String[]>([])
  addfruit(fruit:String){
    this.fruits.update(i=>[...i, fruit])
  }
  getFruits(){
    return this.fruits
  }
}
