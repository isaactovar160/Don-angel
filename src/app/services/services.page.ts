import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }

  albanil() {
    this.router.navigate(['/albanil'])
  }
  ceramica() {
    this.router.navigate(['/ceramica'])
  }
  carpenter() {
    this.router.navigate(['/carpenter'])
  }
  plumber() {
    this.router.navigate(['/plumber'])
  }
  electric() {
    this.router.navigate(['/electric'])
  }
  devices() {
    this.router.navigate(['/devices'])
  }


}
