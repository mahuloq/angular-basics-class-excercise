import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  title: string = 'Angularness is close to Jugularness';
  content: string = 'This is my 5000 page articles on how Angurlarness is ...';

  isTechRelated: boolean = true;
}
