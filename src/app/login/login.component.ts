import { Component } from '@angular/core';

// Componente de tela de login usando NgModule
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Propriedades para o two-way binding
  usuario: string = '';
  senha: string = '';

  // Método chamado ao submeter o formulário
  login() {
    // Aqui você pode implementar a lógica de autenticação
    alert(`Usuário: ${this.usuario}\nSenha: ${this.senha}`);
  }
}
