import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDigimon } from '../interface/digimon.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(
    private http: HttpClient
  ) { }

  private api_url= 'https://digimon-api.herokuapp.com/api/digimon/';

  getDigimon(digimon?:string): Observable<IDigimon[]> {
    const digimonName = digimon ? digimon : '';
    const name = digimon ? 'name/': '';
    const url = `${this.api_url}${name}${digimonName}`;
    return this.http.get<IDigimon[]>(url);
  }


}
