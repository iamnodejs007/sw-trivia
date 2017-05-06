import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {

  results: any = {};
  score: number = 0;

  constructor(public params: NavParams,
              public navCtrl: NavController) {

    let score = 0;

    this.results = params.get('results');
    this.results.forEach(result => {
      score += ((result.correct == true) ? 1 : 0)
    });
    this.score = (score / this.results.length);

  }

}