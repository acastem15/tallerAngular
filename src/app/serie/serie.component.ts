import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  average: number = 0;


  constructor(private serieService:SerieService ) { }
  series:Array<Serie>=[];


  getSerieList() {
    this.serieService.getSeries().subscribe((ss) => {
      this.series = ss;
    });
  }
  getAverageSeasons(series:Array<Serie>) {
    let total = 0
    let seriesCan=series.length
    series.forEach(element => {
      total+=element.seasons
    });

    this.average= total/seriesCan

  }
  ngOnInit() {
    this.getSerieList();
    this.getAverageSeasons(this.series);
  }

}
