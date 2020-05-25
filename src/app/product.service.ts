import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {

  private _albumUrl: string = "../assets/album.json";

  constructor(private http: HttpClient) { }

  getAlbum(id: number) {
    return this.http.get(this._albumUrl);
    //return this._http.get(this._albumUrl).map((response) => response.json());
  }
}
