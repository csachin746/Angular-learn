import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from 'src/app/service/test.service';
console.log('home component Loded....')
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(TestService:TestService){

  }

  ngOnInit(): void {
  }

}
