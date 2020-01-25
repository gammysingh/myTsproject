import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../../services/strapi/strapi.service';
@Component({
  selector: 'app-ready-fly',
  templateUrl: './ready-fly.component.html',
  styleUrls: ['./ready-fly.component.css']
})
export class ReadyFlyComponent implements OnInit {
 data: any = [];
 strapiURL = 'https://cms.travelsouq.com/';
 media = '';
 m_media = '';

  constructor(private strapi: StrapiService) { }

  ngOnInit() {
    this.strapi.getReadyToFly()
      .subscribe(data => {
        this.data = data[0];
        this.media = this.strapiURL + data[0].backImage.url;
        this.m_media = this.strapiURL + data[0].mobilebackimage.url;
      });

  }
}
