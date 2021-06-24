import { BlogPostModel } from './../../services/blog-post-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public logoUrl = "/assets/favIcon.jpeg";
  public titulo = "First Post";
  public descricao = "Hy there"

  constructor() {}

  ngOnInit(): void {
  }

}
