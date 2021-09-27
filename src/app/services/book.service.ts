import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = "https://localhost:44343/api";

  formData = new BookModel();
  bookid= 0
  addBook() {
    return this.http.post(this.APIUrl + "/books", this.formData);
  }

  getBooks(){
    return this.http.get<any[]>(this.APIUrl + "/books");
  }

}
