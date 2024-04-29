import { Routes } from '@angular/router';
import {
    AboutUsPageComponent,
    FaqPageComponent,
    HomePageComponent,
    PoliciesPageComponent,
    ShippingPageComponent,
    ContactUsPageComponent,
    ProductsPageComponent,
    ProductPageComponent,
    AccountPageComponent,
    ShoppingCartPageComponent,
    NotFoundPageComponent,
    AuthorizationPageComponent
} from './index';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        data: { animation: 'homePage' }
    },
    {
        path: 'about-us',
        title: 'About us - Canadian Drug Store',
        component: AboutUsPageComponent,
        data: { animation: 'aboutUsPage' }
    },
    {
        path: 'policies',
        title: 'Policies - Canadian Drug Store',
        component: PoliciesPageComponent,
        data: { animation: 'policiesPage' }
    },
    {
        path: 'shipping',
        title: 'Shipping - Canadian Drug Store',
        component: ShippingPageComponent,
        data: { animation: 'shippingPage' }
    },
    {
        path: 'faq',
        title: 'FAQ - Canadian Drug Store',
        component: FaqPageComponent,
        data: { animation: 'faqPage' }
    },
    {
        path: 'contact-us',
        title: 'Contact us - Canadian Drug Store',
        component: ContactUsPageComponent,
        data: { animation: 'contactUsPage' }
    },
    {
        path: 'products',
        title: 'All Products - Canadian Drug Store',
        component: ProductsPageComponent,
        data: { animation: 'productsPage' }
    },
    {
        path: 'product/:id',
        title: 'Product - Canadian Drug Store',
        component: ProductPageComponent,
        data: { animation: 'productPage' }
    },
    {
        path: 'account',
        title: 'My Account - Canadian Drug Store',
        component: AccountPageComponent,
        data: { animation: 'accountPage' }
    },
    {
        path: 'shopping-cart',
        title: 'Shopping Cart - Canadian Drug Store',
        component: ShoppingCartPageComponent,
        data: { animation: 'shoppingCartPage' }
    },
    {
        path: 'authorization',
        title: 'Authorization - Canadian Drug Store',
        component: AuthorizationPageComponent
    },
    {
        path: '**',
        component: NotFoundPageComponent,
        data: { animation: 'notFoundPage' }
    }
];
