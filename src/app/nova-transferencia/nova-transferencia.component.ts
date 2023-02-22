import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valorInvalido = new EventEmitter<String>();

  valor: number;
  destino: number;

  transferir(){
      console.log(`Solicitada nova transferência.`);
      if (this.validarTransferencia()){
        this.aoTransferir.emit({valor: this.valor, destino: this.destino});
        this.limparFormulario();
      }
  }

  limparFormulario(){
    this.valor = undefined;
    this.destino = undefined;
  }

  private validarTransferencia(): boolean{
    const valorValido = this.valor > 0;
    if (!valorValido){
      this.valorInvalido.emit("Valor inválido.")
      this.limparFormulario();
    }
    return true;
  }
}
