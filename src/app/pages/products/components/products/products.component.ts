import { Component } from '@angular/core';
import { categoriesList } from '../../../../data/categoriesList';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../../services';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoriesModalComponent } from '../categories-modal/categories-modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CategoriesModalComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss', '../categories-modal/categories-modal.component.scss']
})
export class ProductsComponent {
  categories = categoriesList;
  isOpenedCategoriesModal: boolean = false;
  selectedCategory: string = 'Anti Acidity';
  query: string = '';
  pageSize: number = 9;
  currentPage: number = 1;
  products: any[] = [];

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['category'] || params['query']) {
        this.selectCategoryAndSearchQuery(params['category'], params['query']);
      } else {
        this.loadData();
      }
    })
  }

  toggleCategoriesModal(): void {
    this.isOpenedCategoriesModal = !this.isOpenedCategoriesModal;
  }

  selectCategory(selectedCategory: string) {
    this.selectedCategory = selectedCategory;
    this.selectCategoryAndSearchQuery(this.selectedCategory, this.query);
  }

  selectCategoryAndSearchQuery(category: string, query: string = '') {
    this.query = query.toLowerCase();
    this.selectedCategory = category;
    this.router.navigate(['/products'], { queryParams: { category: category, query: this.query } });
    this.loadData(query);
  }

  loadData(query: string = '') {
    // this.productsService.getData().subscribe((data: any[]) => {
    const initialData = this.productsService.getData();
    // .slice(0, 12)

    let interData = initialData;
    if (this.selectedCategory !== 'All Products') {
      interData = initialData.filter((item: { category: string; }) => item.category === this.selectedCategory);
    }

    if (query !== '') {
      const filteredData = interData.filter((product: { title: string; }) => product.title.toLowerCase().includes(query));
      interData = filteredData;
    }

    this.products = interData;
  }

  search(): void {
    this.router.navigate(['/products'], { queryParams: { category: this.selectedCategory, query: this.query.toLowerCase() } });
    const results = this.productsService.getProductByTitle(this.query.toLowerCase());
    this.products = results;
  }

}
