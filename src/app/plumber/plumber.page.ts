import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-plumber',
  templateUrl: './plumber.page.html',
  styleUrls: ['./plumber.page.scss'],
})
export class PlumberPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  profile() {
    this.router.navigate(['/profile'])
  }
}
