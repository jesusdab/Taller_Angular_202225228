import { Component, OnInit } from '@angular/core';
import { Series } from './series';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Series> = [];
  averageSeasons: number = 0;

  constructor(private seriesService: SeriesService) { }

  getSeriesList() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      this.averageSeasons = this.series.reduce((acc, series) => acc + series.seasons, 0) / this.series.length;
    });
  }

  ngOnInit() {
    this.getSeriesList();
  }

  getAverage(): number {
    let series: Series[] = this.series;
    let totalSeasons: number = 0;
    for (let serie of series) {
      totalSeasons += serie.seasons;
    }
    let prom: number = totalSeasons / series.length;
    return prom;
  }
}