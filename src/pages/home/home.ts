import { PersonProvider } from '../../providers/person/person';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfomanceDataProvider } from '../../providers/perfomance-data/perfomance-data'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  distance: number = 1000;

  constructor(
    public navCtrl: NavController,
    public person: PersonProvider,
    public perfomanceData: PerfomanceDataProvider
  ) {
    this.person.age = 20;
    this.person.gender = 'female';
  }
  
  calculate() {
    this.person.doAssessment(this.distance);
    this.perfomanceData
      .saveData({ performance_data: { data: { message: this.person.assessmentMessage } } })
      .subscribe(data => console.log(data));
  } 
  

}
