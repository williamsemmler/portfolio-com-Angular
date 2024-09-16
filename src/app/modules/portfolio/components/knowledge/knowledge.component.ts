import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interfaces/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: '/assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento HTML5'
    },
    {
      src: '/assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento CSS3'
    }, 
    {
      src: '/assets/icons/knowledge/js.svg',
      alt: 'Ícone de conhecimento JavaScript'
    }, 
    {
      src: '/assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento Angular'
    }, 
    {
      src: '/assets/icons/knowledge/bootstrap.svg',
      alt: 'Ícone de conhecimento Bootstrap'
    }, 
    {
      src: '/assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento SASS'
    }, 
    {
      src: '/assets/icons/knowledge/git.svg',
      alt: 'Ícone de conhecimento Git'
    }, 
    {
      src: '/assets/icons/knowledge/php.svg',
      alt: 'Ícone de conhecimento PHP'
    }, 
  ]);
}

