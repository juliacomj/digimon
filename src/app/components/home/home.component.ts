import { Component, OnInit } from '@angular/core';
import { DigimonService } from 'src/app/service/digimon.service';
import { IDigimon } from 'src/app/interface/digimon.interface';
import { delay } from 'rxjs/operators';
import { DigimonDetailsService } from 'src/app/service/digimon-details.service';
import { IDigimonDetails } from 'src/app/interface/digimon-details.interface';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  private response: IDigimon [];
  private details: IDigimonDetails;
  private digimonName: string;

  constructor(
    private digimon: DigimonService,
    private digimonDetails: DigimonDetailsService,
  ) { }
  

  ngOnInit() {
   
  }

   onType(event:any){
    this.digimonName = event.target.value;
   }

   onSubmit(){
    if( this.digimonName === '' ){
      this.response =[];
     }
     else if(this.digimonName === 'todos' ){
        this.showDigimon();
     }else{
       this.showDigimon(this.digimonName);
     }
   }
  
  showDigimon(digimon?: string) {
    this.digimon.getDigimon(digimon)
    .subscribe(
      (data) => {
       this.response = data;
      }
      
    )
  }

  showDigimonDetails(digimon?: string) {
    this.digimonDetails.getDigimonDetails(digimon).subscribe(
      (data) => {
       this.details = data;
       console.log(this.details)
      }
    )
  }





}
