import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../../shared/interfaces';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customers-list.html',
})

export class CustomersListComponent implements OnInit {
    private _customers: Customer[] = [];
    @Input() get customers(): Customer[] {
        return this._customers;
    }

    set customers(value: Customer[]) {
        if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }

    filteredCustomers: Customer[] = [];
    customerOrderTotal!: number;
    currencyCode: string = 'USD';
    constructor() {}

    ngOnInit() {

    }


    calculateOrders() {
        this.customerOrderTotal = 0;
        this.filteredCustomers.forEach((cust: Customer) => {
            console.log(cust)
            this.customerOrderTotal += cust.orderTotal || 0;
        });
    }

    sort(props: string) {
        
    }
}