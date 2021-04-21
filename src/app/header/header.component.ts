import { Component, OnInit ,HostListener} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }
  public isMobile: boolean;

  ngOnInit() {
    this.isMobile = window.innerWidth <= 576 ? true : false;
  }

  navigateTo(choice) {
    switch (choice) {
      case 'home': {
        this.route.navigateByUrl('/');
        break;
      }
      case 'about': {
        this.route.navigateByUrl('/about');
        break;
      }
      case 'feedback': {
        this.route.navigateByUrl('/feedback');
        break;
      }
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = window.innerWidth <= 576 ? true : false;
  }
}
