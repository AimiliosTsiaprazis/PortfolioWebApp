import { Injectable } from '@angular/core';
import {Project} from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  private projects: Project[] = [
    {
      id:1,
      title:'Geo Figures',
      description: 'A Project with different geometrical figures using system.canvas',
      technologies: ['C#', '.NET', 'Windows Forms', 'Canvas'],
      imageUrl: 'ProjectsImages/GeoFigures.jpg',
      demoUrl: 'https://example.com/demo1',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
  },
    {
      id: 2,
      title: 'Portfolios',
      description: 'Different Personal Portfolios-Websites in Angular & Html-css-js',
      technologies: ['Angular', 'TypeScript', 'CSS', 'HTML', 'Frontend'],
      imageUrl: 'ProjectsImages/Portfolios.jpg',
      demoUrl: 'https://example.com/demo2',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id: 3,
      title: 'File Renamer',
      description: 'A File Renamer in C# through a UI in Forms',
      technologies: ['Files', 'C#', 'Windows Forms', 'UI'],
      imageUrl: 'ProjectsImages/FileRenamer.jpg',
      demoUrl: 'https://example.com/demo3',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
     {
      id:6,
      title: 'WordPress',
      description: 'WordPress Website Projects with diffrent Themes and Plugins',
      technologies: ['WordPress', 'Themes', 'Plugins', 'UI', 'Data', 'Server', 'Installation'],
      imageUrl: 'ProjectsImages/WordPress.jpg',
      demoUrl: 'https://example.com/demo6',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:4,
      title: 'Digital Ecosystem',
      description: 'Digital Ecosystem Management with options and functions using different classes and relations with animals',
      technologies: ['C#', 'Obejct Orientated Programming', '.NET', 'Classes'],
      imageUrl: 'ProjectsImages/DigitalesOekosystem.jpg',
      demoUrl: 'https://example.com/demo4',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:5,
      title: 'Max Temperature',
      description: 'Project with a MaxTemp UI using configured Data in C#',
      technologies: ['C#', 'Forms', 'UI', 'Data'],
      imageUrl: 'ProjectsImages/MaxTemp.jpg',
      demoUrl: 'https://example.com/demo5',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:7,
      title: 'EmailService',
      description: 'Email service for an existing visitor app for appointment extraction and storage in Supabase with various UIs such as Swagger & Hangfire available',
      technologies: ['C#', 'Services', 'NuGet', 'JSON', 'Swagger', 'Hangfire', 'Supabase'],
      imageUrl: 'ProjectsImages/EmailService.jpg',
      demoUrl: 'https://example.com/demo7',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:10,
      title: 'FitnessTracker',
      description: 'Fitness tracker UI with user registration, login, exercise selection and filtering and tracking of workouts',
      technologies: ['C#', 'HTML', 'CSS', 'API', 'Database'],
      imageUrl: 'ProjectsImages/FitnessTracker.jpg',
      demoUrl: 'https://example.com/demo10',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:8,
      title: 'Spotify Clone',
      description: 'Clone of the Spotify Original Login Page using only html and css',
      technologies: ['HTML', 'CSS', 'Frontend'],
      imageUrl: 'ProjectsImages/SpotifyClone.jpg',
      demoUrl: 'https://example.com/demo8',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:9,
      title: 'Swagger Project',
      description: 'Swagger Project using different Controllers and API Documentation in GET-SET-DELETE-UPDATE calls using Supabase as a Database',
      technologies: ['C#', 'Swagger', 'Controllers', 'API', 'Supabase'],
      imageUrl: 'ProjectsImages/Swagger.png',
      demoUrl: 'https://example.com/demo9',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:11,
      title: 'PHP Projects',
      description: 'Contact form with simple fields & simple website navigation as first project',
      technologies: ['PHP', 'HTML', 'CSS', 'Frontend'],
      imageUrl: 'ProjectsImages/PHP.jpg',
      demoUrl: 'https://example.com/demo11',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:12,
      title: 'Teachable Machine AI Models',
      description: 'Simple AI Models using different Machine Learning Techniques in Teachable Machine Website -> Image and Video Recognition',
      technologies: ['AI', 'Machine Learning', 'Teachable Machine', 'Images', 'Videos'],
      imageUrl: 'ProjectsImages/TeachableMachine.jpg',
      demoUrl: 'https://example.com/demo12',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:13,
      title: 'Python AI Data Projects',
      description: 'Implementation and application possibilities of data-based AI models using Python and different Libaries',
      technologies: ['AI', 'Machine Learning', 'Python', 'Libraries', 'Data'],
      imageUrl: 'ProjectsImages/Python.jpg',
      demoUrl: 'https://example.com/demo13',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:14,
      title: 'Orange Data Mining',
      description: 'Structurizing and Training Data in Orange Data Mining Application',
      technologies: ['AI', 'Machine Learning', 'OrangeDataMining', 'Training', 'Data'],
      imageUrl: 'ProjectsImages/ODM.jpg',
      demoUrl: 'https://example.com/demo14',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:15,
      title: 'JIRA',
      description: 'JIRA Ticket - Board and Agile Working Process',
      technologies: ['Agile', 'Scrum', 'JIRA', 'Agile', 'Process'],
      imageUrl: 'ProjectsImages/JIRA.jpg',
      demoUrl: 'https://example.com/demo15',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:16,
      title: 'Confluence',
      description: 'Confluence Documentation of Projects and Tickets for a better and understanding process',
      technologies: ['Confluence', 'Documentation', 'Process', 'Understanding'],
      imageUrl: 'ProjectsImages/Confluence.jpg',
      demoUrl: 'https://example.com/demo16',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:17,
      title:'Automated SEO Dashboard',
      description: 'A SEO Automated Dashboard with data exportation in excel and different diagramms',
      technologies: ['Python', 'AI', 'Excel', 'Libraries'],
      imageUrl: 'ProjectsImages/seo_automated_dashboard.jpg',
      demoUrl: 'https://example.com/demo17',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:18,
      title:'Job Application Tracker',
      description: 'Job Application Tracker as i was unemployed for a period of time, with the date of the application, the company, the position and the status of each application saved to mysql database, using the sql queries in my project directly',
      technologies: ['C#', '.NET', 'mySQL', 'Libraries'],
      imageUrl: 'ProjectsImages/JobApplicationTracker.jpg',
      demoUrl: 'https://example.com/demo18',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:19,
      title:'RapidAPI',
      description: 'Webapi with C# connection to RapidAPI free versions and using SwaggerUI to execute the API Controllers',
      technologies: ['C#', '.NET', 'Swagger', 'Libraries', 'RapidAPI', 'JSON'],
      imageUrl: 'ProjectsImages/RapidApi.png',
      demoUrl: 'https://example.com/demo19',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    },
    {
      id:20,
      title: 'Football Team Management',
      description: 'Full-stack web application for managing football team with players and matches, using C# for Custom API with Swagger, SQL - Supabase and Angular',
      technologies: ['C#', 'Swagger', 'Custom API', 'Supabase', 'PostgreSQL', 'Angular'],
      imageUrl: 'ProjectsImages/Football-Team-Management.jpg',
      demoUrl: 'https://example.com/demo20',
      githubUrl: 'https://github.com/AimiliosTsiaprazis'
    }
  ];
  constructor()
  {

  }
  getProjects(): Project[]{
    return this.projects;
  }
  getProjectById(id:number): Project | undefined{
    return this.projects.find(project => project.id === id);
  }
  getSkills():string[]{
    return [
      'Angular',
      'TypeScript',
      'HTML',
      'CSS',
      'JavaScript',
      'C#',
      'Python',
      'WordPress',
      'Databases',
      'GitLab',
      'GitHub',
      'Atlassian',
      'AI'
    ];
  }
  getPersonalInfo(){
    return{
      name:'Aimilios Tsiaprazis',
      title:'Junior Software developer',
      email: 'aimiliostsiaprazis@gmail.com',
      phone: '-',
      location: 'Stuttgart, Germany'
    };
  }
}
