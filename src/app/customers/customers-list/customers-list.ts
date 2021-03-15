import { Component, OnInit } from '@angular/core';

import { Customer } from '../../shared/interfaces';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customers-list.html',
})

export class CustomersListComponent implements OnInit {
    filteredCustomers: Customer[] = [];
    customerOrderTotal!: number;
    currencyCode: string = 'USD';
    constructor() {}

    ngOnInit() {
        this.filteredCustomers = [
            { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
            { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
            { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
            { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
        ];
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