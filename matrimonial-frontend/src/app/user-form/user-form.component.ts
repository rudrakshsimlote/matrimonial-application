import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  name: string = '';
  age: number | null = null;
  bio: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const user = { name: this.name, age: this.age, bio: this.bio };
    this.http.post('/api/users', user).subscribe(response => {
      console.log('User created:', response);
    });
  }
}
