import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../services/strapi/strapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  logo: String;
  constructor(private strapi: StrapiService) { }

  ngOnInit() {
    // this.strapi.getLogo().subscribe((data)=>{
    //   this.logo = data[0].path.url;
    // });
  }

}
