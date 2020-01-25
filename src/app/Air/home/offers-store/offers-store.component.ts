import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { StrapiService } from '../../../services/strapi/strapi.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-offers-store',
  templateUrl: './offers-store.component.html',
  styleUrls: ['./offers-store.component.css']
})
export class OffersStoreComponent implements OnInit, AfterViewInit {

  offers: any = [];
  // @ViewChild('owl', { static: false }) owl: ElementRef<HTMLDivElement>;

  mySlideImages = [1, 2, 3].map((i) => `https://picsum.photos/640/480?image=${i}`);
  mySlideOptions = { loop: true, dots: true, autoplay: true, margin: 10,
                    responsiveClass: true, autoplayTimeout: 3000,
                    responsive: {
                      0: {
                        items: 1,
                        dots: true,
                        nav: false
                      },
                      600: {
                        items: 1,
                        dots: true,
                        nav: false
                      },
                      1000: {
                        items: 2,
                        nav: false,
                        loop: true,
                        dots: true,
                        margin: 20
                      }
                    }
                  };

  constructor(private strapi: StrapiService) { }

  ngOnInit() {
    this.strapi.getOffersInStore().subscribe((data) => {
      this.offers = data;


      /*$('.owl-carousel').owlCarousel({
          loop: true,
          dots: true,
          autoplay: true,
          margin: 10,
          responsiveClass: true,
          autoplayTimeout: 3000,
          responsive: {
            0: {
              items: 1,
              dots: true,
              nav: false
            },
            600: {
              items: 1,
              dots: true,
              nav: false
            },
            1000: {
              items: 2,
              nav: false,
              loop: true,
              dots: true,
              margin: 20
            }
          }
      });*/
    });
  }

  ngAfterViewInit() {
    // this is your dom
    // this.owl.owlCarousel();
  }

}
