import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../../services/strapi/strapi.service';
@Component({
  selector: 'app-popular-country',
  templateUrl: './popular-country.component.html',
  styleUrls: ['./popular-country.component.css']
})
export class PopularCountryComponent implements OnInit {
  data: any = [];
  labelData: any = [];
  labels: any = {
    'popular-country-text': '',
    'popular-country-description': '',
  };
  constructor(private strapi: StrapiService) {
  }

  ngOnInit() {
    this.strapi.getCountriesData()
      .subscribe(data => {
        this.data = data;
      });

    this.getLabel('popular-country-text');
    this.getLabel('popular-country-description');

  }

  getLabel(name: any) {
    this.strapi.getLabel(name).subscribe((data) => {
      this.labels[name] = data[0].value;
    });
  }

}
