import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  items=['nicolas', 'julian', 'perez'];

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/nivel-1.jpg',
      title: 'Cuadrado Doble',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/nivel-2.jpg',
      title: 'Libera la Anilla',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/nivel-3.jpg',
      title: 'La T',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/nivel-4.jpg',
      title: 'Acto de Equilibrio',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/nivel-5.jpg',
      title: 'Saca el Palo',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/nivel-6.jpg',
      title: 'Orejas de Burro',
      price: 8000,
      description: 'bla bla bla bla bla'
    }
  ];

  addItem(){
    this.items.push('nuevo item')
  }

  deleteItem(index: number){
    this.items.splice(index, 1)
  }
}
