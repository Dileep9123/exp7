import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('nav') sidenav!: MatSidenav;  // Use non-null assertion operator

  ngAfterViewInit(): void {
    // Make sure to call toggle() after the view has been initialized
    this.sidenav.toggle();
  }

  toggle() {
    this.sidenav.toggle();  // Toggle sidenav open/close
  }
}
