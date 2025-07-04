import { Component } from '@angular/core';

// Componente de tela de login usando NgModule
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Propriedades para o two-way binding e validação
  email: string = '';
  senha: string = '';

  emailValido: boolean = true;
  senhaValida: boolean = true;

  // Validação em tempo real do email
  validarEmail() {
    // Expressão regular simples para email
    this.emailValido = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email);
  }

  // Validação em tempo real da senha (mínimo 6 caracteres)
  validarSenha() {
    this.senhaValida = this.senha.length >= 6;
  }

  // Método chamado ao submeter o formulário
  login() {
    this.validarEmail();
    this.validarSenha();
    if (!this.emailValido || !this.senhaValida) {
      alert('Preencha corretamente os campos!');
      return;
    }
    // Aqui você pode implementar a lógica de autenticação
    alert(`Email: ${this.email}\nSenha: ${this.senha}`);
  }
}
