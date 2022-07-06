import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  //eventEmitter
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // se emite cuando deja de escribir
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    // Observable
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  buscar() {
    //emitimos el valor del termino
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    //conectamos debouncer
    this.debouncer.next(this.termino);
  }
}
