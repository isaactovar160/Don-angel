import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-electric',
  templateUrl: './electric.page.html',
  styleUrls: ['./electric.page.scss'],
})
export class ElectricPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  profile() {
    this.router.navigate(['/profile'])
  }
}

