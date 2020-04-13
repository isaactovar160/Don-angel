import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albanil',
  templateUrl: './albanil.page.html',
  styleUrls: ['./albanil.page.scss'],
})
export class AlbanilPage implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }

  profile() {
    this.router.navigate(['/profile'])
  }

}
