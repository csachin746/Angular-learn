import { Component, ViewEncapsulation } from '@angular/core';
console.log('Header Component Loded...')
@Component({
  selector: 'app-header', // Selector As an Element
  // selector: '[app-header]', //Selector As an Attributes
  // selector: '.app-header' //Selector As a Class
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  })
export class HeaderComponent {

}
