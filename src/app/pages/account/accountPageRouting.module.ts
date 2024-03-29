import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './accountPage.component';
import { DashboardComponent, OrdersComponent, PersonalInfoComponent, ReviewsComponent, PaymentMethodsComponent } from './components';

const routes: Routes = [
    {
        path: 'account',
        component: AccountPageComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'orders', component: OrdersComponent },
            { path: 'info', component: PersonalInfoComponent },
            { path: 'reviews', component: ReviewsComponent },
            { path: 'methods', component: PaymentMethodsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
