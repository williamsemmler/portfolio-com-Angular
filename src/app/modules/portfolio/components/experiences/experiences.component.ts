import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal([
    {
      summary: {
        strong: "Site Agência de Viagens (em desenvolvimento)",
        //p: "", posteriormente inserir datas das experiências
      },
      text: "<p> Site de uma agência de viagens. Prática envolve a captura de dados vindos de arquivo json.",
      link: "#"
    },
    {
      summary: {
        strong: "Sistemas de pedidos (em desenvolvimento)",
        //p: "", posteriormente inserir datas das experiências
      },
      text: "<p> Aplicação web completa front-end e back-end para o desenvolvimento de um sistema de lançamento de pedidos, acompanhamento de status de produção e histórico de pedidos. Além disso, contará também com área de lançamento de produtos e receitas. Uso das linguagens JavaScript para front-end e PHP para back-end.",
      link: "https://github.com/williamsemmler/Sistema_cucas_do_papai"
    },
    {
      summary: {
        strong: "Pomodoro Timer",
        //p: "", posteriormente inserir datas das experiências
      },
      text: "<p> Aplicação web desenvolvida para prática de técnicas de programação usando biblioteca jQuery.",
      link: "https://github.com/williamsemmler/PomodoroTimer"
    },
    {
      summary: {
        strong: "Clima",
        //p: "", posteriormente inserir datas das experiências
      },
      text: "<p> Prática de desenvolvimento usando API. Aplicação web simples com o intuíto de praticar o uso de API de clima.",
      link: "https://github.com/williamsemmler/clima"
    },
    {
      summary: {
        strong: "Página de login",
        //p: "", posteriormente inserir datas das experiências
      },
      text: "<p> Desenvolvimento de uma página de login. Prática usando Figma como modelo e a linguagem de extensão SASS. Utilizei LocalStorage para salvar o usuário e login para teste.",
      link: "https://github.com/williamsemmler/paginaLogin"
    },
    {
      summary: {
        strong: "Árvore de links Call Up",
        //p: "", posteriormente inserir datas das experiências
      },
      text: "<p> Primeiro desenvolvimento front-end. Usado linguagem JavaScript.",
      link: "https://github.com/williamsemmler/callup-linktree"
    }
  ])

}
