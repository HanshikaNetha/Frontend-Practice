import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdrParent } from './components/cdr-parent/cdr-parent';
import { RxjsDemo } from './components/rxjs-demo/rxjs-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CdrParent, RxjsDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ChangeDetection');
}
