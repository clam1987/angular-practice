import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list';
import { FilterTextBoxComponent } from './customers-list/filtered-textboxcomponent';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
