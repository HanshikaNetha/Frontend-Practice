import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Iterinary } from './components/iterinary/iterinary';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Iterinary],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tours';

  iterinary=[
    {id:101, place: "phagwara-delhi", days:10, cost: 60000, description:"Travel from Phagwara to Delhi, visit India Gate, Red Fort, and local markets"},
    {id:102, place: "Delhi → Agra", days: 1, cost: 20000, description: "Visit the Taj Mahal, Agra Fort, and explore local handicrafts"},
    {id:103, place: "Agra → Jaipur", days: 2, cost: 35000 , description: "Explore Hawa Mahal, City Palace, Amber Fort, and Jaipur bazaars"},
    {id:104, place: "Jaipur → Udaipur", days: 2, cost: 40000, description: "Visit City Palace, Lake Pichola, and enjoy a boat ride"}
  ]


}
