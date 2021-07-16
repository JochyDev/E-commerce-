import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent  {

  title = 'platzi-store';

  items=['nicolas', 'julian', 'perez'];

  power = 3;

  

  addItem(){
    this.items.push('nuevo item')
  }

  deleteItem(index: number){
    this.items.splice(index, 1)
  }

}
