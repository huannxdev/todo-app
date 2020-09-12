import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public categories: Observable<Category[]>;
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  public navigateToProducts(_category: Category) {
    this.router.navigate(['product'], {queryParams: {category: _category.id}, state: {nameCategory: _category.name}});
  }
}
