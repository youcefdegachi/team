import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Faci';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS only in the browser environment
      AOS.init({
        duration: 750,
        delay: 150,
      });
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Refresh AOS only in the browser environment after the view has been initialized
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  }
}
