import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './accountPage.component';
import { DashboardComponent, OrdersComponent, PersonalInfoComponent, ReviewsComponent, PaymentMethodsComponent } from './components';

const routes: Routes = [
    {
        path: 'account',
        component: AccountPageComponent,
        title: 'My Account - Canadian Drug Store',

        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: { animation: 'accountDashboardPage' },
            },
            {
                path: 'orders',
                component: OrdersComponent,
                data: { animation: 'accountOrdersPage' },
            },
            {
                path: 'info',
                component: PersonalInfoComponent,
                data: { animation: 'accountPersonalInfoPage' },
            },
            {
                path: 'reviews',
                component: ReviewsComponent,
                data: { animation: 'accountReviewsPage' },
            },
            {
                path: 'methods',
                component: PaymentMethodsComponent,
                data: { animation: 'accountPaymentPage' },
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
