import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-td',
  templateUrl: './add-product-td.component.html',
  styleUrls: ['./add-product-td.component.css']
})
export class AddProductTDComponent implements OnInit {

  disabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
