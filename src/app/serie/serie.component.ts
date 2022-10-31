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
  getAverageSeasons() {
    let total = 0
    let seriesCan=this.series.length
    for (const serie of this.series){
      total +=serie.seasons
    }

    return total/seriesCan

  }
  ngOnInit() {
    this.getSerieList();
    this.getAverageSeasons();
  }

}
