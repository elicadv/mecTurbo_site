import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  items = [
    { question: 'A reprogramação de injeção eletrônica prejudica meu motor?', answer: 'Não, pois nossos programas sempre respeitam a margem de segurança deixada pelo fabricante. Como essa margem é respeitada, o motor, freios, transmissão, etc, só são submetidos às condições já previstas pela fábrica. A vida útil do conjunto não é alterada. As funções de proteção -como por exemplo o diagnóstico do veículo- não são afetadas. As trocas de óleo e manutenção devem ser respeitadas como indicado no manual.' },
    { question: 'Qual é a mínima e máxima quilometragem que posso reprogramar meu veículo/máquina?', answer: 'Você pode efetuar a reprogramação em seu veículo independente de sua quilometragem. É perfeitamente seguro fazer em veículos novos, temos parcerias com diversas concessionárias para fazer o serviço em veículos 0km!' },
    { question: 'O que é DPF e EGR? Para que servem?', answer: 'O EGR é uma válvula de recirculação de gases de escapamento, utilizada para reduzir as emissões de um motor. DPF é um filtro de partículas de diesel, que vem instalado na maioria das camionetes e maquinários diesel novos. Comumente essas peças podem apresentar problemas. A STRIKE BRASIL é especializada em soluções de problemas em DPF/EGR. Fale com um consultor.' },
  ];

  openedIndex = -1;

  toggleItem(index: number): void {
    if (this.openedIndex === index) {
      this.openedIndex = -1; // fecha se já estiver aberto
    } else {
      this.openedIndex = index; // abre o item selecionado
    }
  }
}
