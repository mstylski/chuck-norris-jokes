import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Joke} from '../models/joke';
import {Injectable} from '@angular/core';
import {Category} from '../models/categories.enum';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) {
  }

  getJoke(category: Category, firstName: string, lastName: string): Observable<Joke> {
    const params = {
      limitTo: `[${category}]`,
      firstName,
      lastName
    };
    return this.http.get<Joke>(`${environment.apiUrl}jokes/random`, {params});
  }
}
