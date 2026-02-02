import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit{
personalInfo: any;
  recentProjects: any[] = [];

  constructor(private dataService: DataService) { }
  
    ngOnInit(): void {
      this.personalInfo = this.dataService.getPersonalInfo();
      this.recentProjects = this.dataService.getProjects();
    }
}
