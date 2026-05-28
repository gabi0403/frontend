import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //exemplo de interpolação (DataBinding)
  //comunicação unidirecional entre TS -> html
  // a interpolação é dada usando {{elemento}}

  nome: string = ' HelloWorld!';

  //property binding -> unidirecional: TS -> HTML
  // manipula propriedades do HTML
  // a property binding é usada com [] em volta do elemento
  imgUrl: string = 'https://i.pinimg.com/474x/33/42/ec/3342ecc3ea77d9c42f13e9806f59b18b.jpg';

  botaoDesabilitado: Boolean = true;

  //class e style binding
  classeAlerta: string = "alert-success";
}
