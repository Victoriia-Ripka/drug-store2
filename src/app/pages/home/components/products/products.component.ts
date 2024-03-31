import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../products/components';
import { CommonModule } from '@angular/common';
import { categoriesList } from '../../../../data/categoriesList';
import { ProductsService } from '../../../../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  categories = categoriesList;
  isOpenedCategoriesModal: boolean = false;
  isOpenedCategoriesList: boolean = true;
  selectedCategory: string = 'BestSellers';
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

  toggleCategoriesList(): void {
    this.isOpenedCategoriesList = !this.isOpenedCategoriesList;
  }

  selectCategoryInModal(selectedCategory: string) {
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
    const initialData = this.productsService.getData().slice(0, 12);

    // let interData = initialData
    // if (this.selectedCategory !== 'All Products') {
    //   interData = initialData.filter((item: { category: string; }) => item.category === this.selectedCategory)
    // }

    // if (query !== '') {
    //   const filteredData = interData.filter((product: { title: string; }) => product.title.toLowerCase().includes(query))
    //   interData = filteredData
    // }

    // this.products = interData
    this.products = initialData;

  }
}
