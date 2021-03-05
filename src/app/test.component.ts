import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Dog {
  message: string;
  status: string;
}
@Component({
  selector: 'app-books',
  template: `<div class="app">{{ content }}</div>
    <pre>{{ dog | json }}</pre>`,
  styles: [
    `
      .app {
        color: #000;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  content: string = 'Test string here';
  dog: Dog;

  constructor(private httpClient: HttpClient) {}

  randomDog(): Observable<Dog> {
    return this.httpClient.get<Dog>(`https://dog.ceo/api/breeds/image/random`);
  }
  ngOnInit(): void {
    this.randomDog().subscribe((dog) => {
      console.log('got dog', dog);
      this.dog = dog;
    });
  }
}
