import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  images = [
    'https://images.unsplash.com/photo-1546416761-4601022bedf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"',
    'https://images.unsplash.com/photo-1546398770-b134faf3de65?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    'https://images.unsplash.com/photo-1546345414-16d37d6baa05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
    'https://images.unsplash.com/photo-1546334713-5af3e8010e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    'https://images.unsplash.com/photo-1546416761-4601022bedf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"',
    'https://images.unsplash.com/photo-1546398770-b134faf3de65?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    'https://images.unsplash.com/photo-1546345414-16d37d6baa05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
    'https://images.unsplash.com/photo-1546334713-5af3e8010e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
  ];

  constructor() {
    console.log('W: ', window.outerWidth, 'H', window.innerHeight);

  }
}
