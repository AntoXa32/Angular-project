import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'interview-master';
  messageFromParent = 'Я твій батько';

  messageFromChild = '';

  getMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
}
