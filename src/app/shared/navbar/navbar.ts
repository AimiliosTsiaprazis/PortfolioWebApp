import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
constructor(private router: Router) {}
  ngOnInit() {
  }
  isActive(route:string):boolean{
  return this.router.url === route;
  }
}
