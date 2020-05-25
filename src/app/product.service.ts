import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl: string = "../assets/album.json";

  constructor(private _http: HttpClient) { }

   getAlbum(id: number):Observable<Album> {
     return this._http.get(this._albumUrl).map((response) => <Album>response);

  }
}
