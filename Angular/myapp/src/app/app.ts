import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'myapp';
  user={
    name:'HanshikaNetha',
    address:'dmm',
    age:21,
    phone: [6789012345, 6789012345],
    gender:'male'
  }
  users=[
    {name:"kui", address: "mumbai", age:21, gender:'male', pic:"https://media.gettyimages.com/id/1468016696/photo/animal-leopard-wildlife-africa-predator-wilderness-savanna-nature-safari-kruger-botswana.jpg?s=612x612&w=gi&k=20&c=OV4n2DmNKlsxZxsc3DrUgSMfAyqbJaDnE7RL8rrWE1I=", edit:false},
    {name:"hui", address: "bangalore", age:23, gender:'female', pic:"https://media.gettyimages.com/id/1468016696/photo/animal-leopard-wildlife-africa-predator-wilderness-savanna-nature-safari-kruger-botswana.jpg?s=612x612&w=gi&k=20&c=OV4n2DmNKlsxZxsc3DrUgSMfAyqbJaDnE7RL8rrWE1I=", edit:true},
    {name:"pui", address: "delhi", age:25, gender:'male', pic:"https://media.gettyimages.com/id/1468016696/photo/animal-leopard-wildlife-africa-predator-wilderness-savanna-nature-safari-kruger-botswana.jpg?s=612x612&w=gi&k=20&c=OV4n2DmNKlsxZxsc3DrUgSMfAyqbJaDnE7RL8rrWE1I=", edit:true}
  ]
}
