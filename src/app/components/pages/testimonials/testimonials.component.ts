import { Component, OnInit } from '@angular/core';
import {ProductService} from './productservice';
import {Product} from './product';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  products: Product[];
	
	responsiveOptions;
  constructor(private productService: ProductService) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

  ngOnInit(): void {
    this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
  }

}
