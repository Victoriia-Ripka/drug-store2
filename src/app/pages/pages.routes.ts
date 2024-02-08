import { Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomePageComponent } from './index';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
            }
        ]
    },
];

// {
    //     path: 'about-us',
    //     title: 'About us - Canadian Drug Store',
    //     component: AboutUsPageComponent
    // },
    // {
    //     path: 'shipping',
    //     title: 'Shipping - Canadian Drug Store',
    //     component: ShippingPageComponent
    // },
    // {
    //     path: 'faq',
    //     title: 'FAQ - Canadian Drug Store',
    //     component: FaqPageComponent
    // },
    // {
    //     path: 'policies',
    //     title: 'Policies - Canadian Drug Store',
    //     component: PoliciesPageComponent
    // },
    // {
    //     path: 'contact-us',
    //     title: 'Contact us - Canadian Drug Store',
    //     component: ContactusPageComponent
    // },
    // {
    //     path: 'products',
    //     title: 'All Products - Canadian Drug Store',
    //     component: ProductsPageComponent
    // },
    // {
    //     path: 'product/:id',
    //     title: 'Product - Canadian Drug Store',
    //     component: ProductPageComponent
    // },
    // {
    //     path: 'account',
    //     title: 'My Account - Canadian Drug Store',
    //     component: AccountPageComponent
    // },
    // {
    //     path: 'shopping-cart',
    //     title: 'Shopping Cart - Canadian Drug Store',
    //     component: ShoppingCartPageComponent
    // },
// ]