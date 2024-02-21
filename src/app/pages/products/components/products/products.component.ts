import { Component } from '@angular/core';
import { categoriesList } from '../../../../data/categoriesList';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../../services';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  categories = categoriesList
  isOpenedCategoriesModal: boolean = false;
  selectedCategory: string = 'All Products'
  query: string = ''
  pageSize: number = 9
  currentPage: number = 1
  products: any[] = []
  producrsAmount: number = 0;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['category'] || params['query']) {
        this.selectCategoryAndSearchQuery(params['category'], params['query'])
      } else {
        this.loadData()
      }
    })
  }

  toggleCategoriesModal(): void {
    this.isOpenedCategoriesModal = !this.isOpenedCategoriesModal
  }

  selectCategoryInModal(selectedCategory: string) {
    this.selectedCategory = selectedCategory
    this.selectCategoryAndSearchQuery(this.selectedCategory, this.query)
  }

  selectCategoryAndSearchQuery(category: string, query: string = '') {
    this.query = query.toLowerCase()
    this.selectedCategory = category
    this.router.navigate(['/products'], { queryParams: { category: category, query: this.query } })
    this.loadData(query)
  }

  loadData(query: string = '') {
    // this.productsService.getData().subscribe((data: any[]) => {
    const initialData = this.productsService.getData().slice(0, 12)
    
    let interData = initialData
      if (this.selectedCategory !== 'All Products') {
        interData = initialData.filter((item: { category: string; }) => item.category === this.selectedCategory)
      }

      if (query !== '') {
        const filteredData = interData.filter((product: { title: string; }) => product.title.toLowerCase().includes(query))
        interData = filteredData
      }

      this.products = interData
      this.producrsAmount = this.products.length

  }

}
