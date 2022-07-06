import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent {
  //eventEmitter
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  buscar() {
    //emitimos el valor del termino
    this.onEnter.emit(this.termino);
  }
}
