import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../../services/strapi/strapi.service';
@Component({
  selector: 'app-about-travelsouq',
  templateUrl: './about-travelsouq.component.html',
  styleUrls: ['./about-travelsouq.component.css']
})
export class AboutTravelsouqComponent implements OnInit {

  labels: object = {
    'about-travelsouq-title': '',
    'about-travelsouq-description': ''
  };

  media: any = {
    'about-travelsouq': '',
  };
  mediaMob: any = {
    'about-travelsouq': '',
  };

  aboutArray: any = [];


  strapiURL = 'https://cms.travelsouq.com/';
  constructor(private strapi: StrapiService) { }

  ngOnInit() {

    this.getLabel('about-travelsouq-title');
    this.getLabel('about-travelsouq-description');
    this.getMedia('about-travelsouq');
    this.getAboutTravelSouq();
  }

  getLabel(name: any) {
    this.strapi.getLabel(name).subscribe((data) => {
      this.labels[name] = data[0].value;
    });
  }
  getMedia(name: any) {
    this.strapi.getMedia(name).subscribe((data) => {
      this.media[name] = this.strapiURL + data[0].photopath[0].url;
      this.mediaMob[name] = this.strapiURL + data[0].mobileTs.url;
    });
  }
  getAboutTravelSouq() {
    this.strapi.getAboutTravelSouq().subscribe(data => {
      this.aboutArray = data;

        }
    );
  }
}
