import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  formData = {
    name: '', // Mudança de "nome" para "name"
    email: '',
    mensagem: ''
  };
  
  successMessage: string | null = null;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('https://python-api-production-42d0.up.railway.app/add_user', this.formData)
      .subscribe({
        next: (response) => {
          this.successMessage = 'Dados enviados com sucesso!';
          this.formData = { name: '', email: '', mensagem: '' }; // Limpa os dados do formulário
        },
        error: (error) => {
          console.error('Erro ao enviar dados', error);
          this.successMessage = null; // Limpa a mensagem de sucesso em caso de erro
        }
      });
  }
}
