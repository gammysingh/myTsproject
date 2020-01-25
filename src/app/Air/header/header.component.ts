import { Component, OnInit, Input } from '@angular/core';
import { StrapiService } from '../../services/strapi/strapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  logo: String;
  languages: any;
  currencies: any;
  strapiURL = 'https://cms.travelsouq.com/';
  labels: any = {
    'mytrip-dropdown-label': '',
    'mytrip-dropdown-login-btn': '',
    'mytrip-dropdown-newhere': '',
    'mytrip-dropdown-signup-btn': ''
  };

  constructor(private strapi: StrapiService) { }

  ngOnInit() {
    this.strapi.getLogo().subscribe((data) => {
      this.logo = this.strapiURL + data[0].photopath[0].url;
    });

    this.strapi.getLanguage().subscribe((data) => {
      this.languages = data;
      console.log(this.languages);
    });

    this.strapi.getCurrency().subscribe((data) => {
      this.currencies = data;
      console.log(this.currencies);
    });

    this.getLabel('mytrip-dropdown-label');
    this.getLabel('mytrip-dropdown-login-btn');
    this.getLabel('mytrip-dropdown-newhere');
    this.getLabel('mytrip-dropdown-signup-btn');
  }

  getLabel(name: any) {
    this.strapi.getLabel(name).subscribe((data) => {
      this.labels[name] = data[0].value;
    });
  }
}
