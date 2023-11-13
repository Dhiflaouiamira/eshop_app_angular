import { Blog } from '../../models/blog';
import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input()
  blog: Blog = new Blog();

  constructor() { }

  ngOnInit(): void { }

}
