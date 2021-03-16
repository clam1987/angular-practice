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
            this.customerOrderTotal += cust.orderTotal || 0;
        });
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: Customer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       (cust.orderTotal?.toString().indexOf(data) || "") > -1;
            });
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    }

    sort(props: string) {
        
    }
}