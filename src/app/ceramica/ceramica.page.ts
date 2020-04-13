import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ceramica',
  templateUrl: './ceramica.page.html',
  styleUrls: ['./ceramica.page.scss'],
})
export class CeramicaPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  profile() {
    this.router.navigate(['/profile'])
  }

}
