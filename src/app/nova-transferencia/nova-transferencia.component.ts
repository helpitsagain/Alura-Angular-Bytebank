import { TransferenciaService } from './../services/transferencia.service';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService){}

  transferir(){
      console.log(`Solicitada nova transferência.`);
      const valorAEmitir: Transferencia = {valor: this.valor, destino: this.destino};
      this.service.adicionar(valorAEmitir).subscribe(resultado => {
        console.log(resultado);
        this.limparFormulario();
      },
      error => {
        console.error(error);
      });
  }

  limparFormulario(){
    this.valor = undefined;
    this.destino = undefined;
  }
}
