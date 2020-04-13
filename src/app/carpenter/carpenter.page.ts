import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-carpenter',
  templateUrl: './carpenter.page.html',
  styleUrls: ['./carpenter.page.scss'],
})
export class CarpenterPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  profile() {
    this.router.navigate(['/profile'])
  }

}
