import { Component } from '@angular/core';
import { Router } from '@angular/router';  // ✅ ADD THIS

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}  // ✅ ADD THIS

  // ✅ FUNCTION FOR REDIRECT
  goToSearch() {
    this.router.navigate(['/search-results']);
  }

}