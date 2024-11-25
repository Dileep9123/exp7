import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // Define the properties for your profile details
  name: string = 'Gunduboina Dileep'; // Replace with your name
  roll: string = '219X1A05C5';    // Replace with your roll number
  section: string = 'C';      // Replace with your section
  department: string = 'Computer Science and Engineering';  // Replace with your department

  constructor() { }

  ngOnInit(): void {
    // You can initialize any logic here if required
  }
}
