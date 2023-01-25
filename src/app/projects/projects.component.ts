import { Component } from '@angular/core'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Online Test Application',
      technologies:
        'Angular, Angular Material, SpringBoot, JPA, Hibernate, MySql Database',

      description: [
        'A complete full stack Website build using Angular, SpringBoot and Sql. The Web app has the function to register as a new user and has login functionalities as well as Admin has all the access to perform CRUD operations on the quiz and categories.',
      ],
    },
    {
      title: 'Angular, Angular Material, SpringBoot, JPA, Hibernate, H2-database',
      technologies: 'HTML,SpringBoot,Bootstrap,JPA,Hibernate,H2 Database',

      description: [
        'A complete full stack e-commerce website to order shoes. The Website has the functionality to signUp and login a user. The user can also order products listed on the website. The admin can create, read, update, delete the data and see the list of users.  ',
      ],
    },
    {
      title: 'Full Stack Food-ordering Website',
      technologies: 'HTML,bootstrap,SpringBoot,JPA,Hibernate,MySql Database',

      description: [
        'A full stack food ordering website to order food from a restaurant. The website has the feature to login and signup and the user can order food in one go. The admin has the option to perform CRUD operations and see the list of the order and fulfill them.',
      ],
    },
  ]
}
