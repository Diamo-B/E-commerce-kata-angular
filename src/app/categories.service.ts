import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from './environments/env';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService{
  categories:string[] = []
  private selectedCatSubject = new Subject<string | null>();

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get<any>(environment.categoriesURL);
  }

  getSelectedCat(): Observable<string | null> {
    return this.selectedCatSubject.asObservable();
  }

  setSelectedCat(cat: string | null): void {
    this.selectedCatSubject.next(cat);
  }
}
