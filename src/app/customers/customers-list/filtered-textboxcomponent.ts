import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-filter-textbox',
    template: `
        Filter: <input type="text" />
    `
})

export class FilterTextBoxComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}