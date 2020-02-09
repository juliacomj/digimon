import { Component, OnInit } from '@angular/core';
import { DigimonService } from 'src/app/service/digimon-service.service';
import { IDigimon } from 'src/app/interface/digimon.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  private response: IDigimon [];
 

  constructor(
    private digimon: DigimonService,
  ) { }
  

  ngOnInit() {
   this.showDigimon();
  }
  

  
  showDigimon(digimon?: string) {
    this.digimon.getDigimon(digimon).subscribe(
      (data) => {
       this.response = data;
       console.log(this.response)
      }
      
    )
  }



}
