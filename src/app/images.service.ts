import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private httpClient: HttpClient) {}

  private getImageListFromApi(): any {
    return this.httpClient.get(
      'https://jsonplaceholder.typicode.com/photos?albumId=1'
    );
  }

  private countvowels = str => (str.match(/[aeiou]/gi) || []).length;

  private sortByVowels(list) {
    return list.sort((a, b) => {
      var aSize = this.countvowels(a.title);
      var bSize = this.countvowels(b.title);
      var aId = a.id;
      var bId = b.id;
      // console.log(aId + ' | ' + bId);

      if (aSize == bSize) {
        return aId < bId ? -1 : aId > bId ? 1 : 0;
      } else {
        return aSize < bSize ? -1 : 1;
      }
    });
  }

  getImageList() {
    return this.getImageListFromApi().pipe(
      switchMap((data: Observable<any>) => {
        return of(this.sortByVowels(data));
      })
    );
  }
}
