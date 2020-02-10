import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDigimon } from '../interface/digimon.interface';
import { Observable } from 'rxjs';
import { IDigimonDetails } from '../interface/digimon-details.interface';


@Injectable({
  providedIn: 'root'
})
export class DigimonDetailsService {

  constructor(
    private http: HttpClient
  ) { }

  private api_url = 'https://digimon-cyber-sleuth-api.herokuapp.com/api/digimon'

  getDigimonDetails(digimon?:string): Observable<IDigimonDetails> {
    const digimonName = digimon ? digimon : '';
    const name = digimon ? 'name/': '';
    const url = `${this.api_url}${name}${digimonName}`;
    return this.http.get<IDigimonDetails>(url);
  }

  


}