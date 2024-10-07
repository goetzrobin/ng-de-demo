import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet/>`,
  host: {
    class: 'block h-full w-full mx-auto max-w-screen-xl p-4',
  }
})
export class AppComponent {}
