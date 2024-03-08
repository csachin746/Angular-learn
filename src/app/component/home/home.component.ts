import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from 'src/app/service/test.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
console.log('home component Loded....')
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  template: '<div class ="test"><p>Hello</p></div>',
  styles: [`.test{font-size:20px;color:red}`]
})
export class HomeComponent implements OnInit {

  constructor(TestService:TestService){

  }

  ngOnInit(): void {
  }

}
