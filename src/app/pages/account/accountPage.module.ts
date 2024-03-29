import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountPageComponent } from './accountPage.component';
import { AccountRoutingModule } from './accountPageRouting.module';

@NgModule({
    declarations: [AccountPageComponent],
    imports: [CommonModule, RouterModule, AccountRoutingModule],
    exports: [AccountPageComponent]
})
export class AccountPageModule { }
