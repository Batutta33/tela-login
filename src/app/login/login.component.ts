import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Componente de tela de login standalone
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
