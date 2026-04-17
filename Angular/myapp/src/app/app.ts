import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetails } from './components/user-details/user-details';
import { UserdetailsListView } from './components/userdetails-list-view/userdetails-list-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserDetails, UserdetailsListView],
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
    {name:"pui", address: "delhi", age:25, gender:'male', pic:"https://media.gettyimages.com/id/1468016696/photo/animal-leopard-wildlife-africa-predator-wilderness-savanna-nature-safari-kruger-botswana.jpg?s=612x612&w=gi&k=20&c=OV4n2DmNKlsxZxsc3DrUgSMfAyqbJaDnE7RL8rrWE1I=", edit:true},
    {name:"lui", address: "chennai", age:45, gender:'male'},
    {name:"daisy", address:"hyderabad", age:24, gender:'female'},
    {name:"tom", address:"pune", age:34, gender:'male'}

  ]
  changetitle(){
    this.title="changed title"
  }

  need : string=''

  parentAction(data: any){
    console.log("parent has recieved data for action ", data)
    for(let i=0; i<this.users.length; i++){
      if(this.users[i].name===data.name){
        this.users.splice(i, 1)
        break
      }
    }
  }

  updateUser(data: any){
    console.log("asked by child to parent to update user", data.name, data.age)

  }

  
  
}
