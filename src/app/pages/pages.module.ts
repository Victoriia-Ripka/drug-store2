import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './pages.routes';
import { ContactUsPageModule } from './contact-us/contactUsPage.module';
import { AccountPageModule } from './account/accountPage.module';
// import { HttpClient } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule, 
        RouterModule.forChild(routes),
        ContactUsPageModule,
        AccountPageModule
    ],
    // providers: [HttpClient],
    exports: [RouterModule],
})
export class PagesModule { }