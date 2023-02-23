import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  destino: number;
  valor: number;

  transferir($event: any){
    console.log($event);
    this.service.adicionar($event);
  }

  constructor(private service: TransferenciaService){}
}
