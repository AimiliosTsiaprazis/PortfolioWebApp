import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports:[CommonModule]
})
export class Home implements OnInit {
  personalInfo: any;
  recentProjects: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.personalInfo = this.dataService.getPersonalInfo();
    this.recentProjects = this.dataService.getProjects();
  }
}
