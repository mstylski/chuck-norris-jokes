import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Category} from '../models/categories.enum';
import {JokeService} from './joke.service';
import {Joke} from '../models/joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent implements OnInit {
  category = Category;
  modelForm!: FormGroup;
  joke!: Joke;

  constructor(private jokesService: JokeService,
              private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.drawRandomJoke();
  }

  drawRandomJoke(): void {
    const [firstName, lastName] = this.modelForm.value.fullName.split(' ');
    this.jokesService.getJoke(this.modelForm?.get('category')?.value, firstName, lastName)
      .subscribe(joke => this.joke = joke);
  }

  private buildForm(): void {
    this.modelForm = this.fb.group({
      category: Category.ANY,
      fullName: 'Chuck Norris'
    });
  }
}
