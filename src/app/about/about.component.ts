import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
skills=[
  {
    name: 'Angular, Angular Material',
    level: 'Intermediate',
    rating: '80',
  },
]
}
