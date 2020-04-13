import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  profile() {
    this.router.navigate(['/profile'])
  }
}
