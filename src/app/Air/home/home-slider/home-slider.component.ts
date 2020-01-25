import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../../services/strapi/strapi.service';
import { NgbCarouselConfig, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})

export class HomeSliderComponent implements OnInit {
  fromControl = new FormControl();
  toControl = new FormControl();
  options: any = [];
  strapiURL = 'https://cms.travelsouq.com/';
  selectedFlightTripType = 'RoundTrip';
  airlineImages: any;
  flightTripTypes: any;
  homeBannerSlides: any;
  departDate: Date;
  returnDate: Date;
  minDate = undefined;
  maxDate = undefined;
  returnMinDate = undefined;
  closeResult: string;
  labels: any = {
    'home-banner-title': '',
    'from-dropdown': '',
    'to-dropdown': '',
    'serach-flight-checkbox-text-1': '',
    'serach-flight-checkbox-text-2': '',
    'search-flight-btn': '',
    'home-banner-airline-title': ''
  };

  media: any = {
    'search-flight-text': '',
    'search-flight-btn': ''
  };

  constructor(private strapi: StrapiService, config: NgbDatepickerConfig,private modalService: NgbModal) {
    const current = new Date();
    this.returnMinDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };

  }
  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

  ngOnInit() {
    this.fromControl.valueChanges.subscribe((newValue) => {
      this.fromControl.patchValue(newValue, { emitEvent: false });
    });
    this.toControl.valueChanges.subscribe((newValue) => {
      this.toControl.patchValue(newValue, { emitEvent: false });
    });
    this.strapi.getAirportList().subscribe(data => {
      this.options = data;

      console.log('new', data);
      console.log('bad', this.options);
    });

    this.strapi.getFlightTripType().subscribe(data => {
      this.flightTripTypes = data;
      console.log(this.flightTripTypes);
    });

    this.strapi.getAirlineImages().subscribe(data => {
      this.airlineImages = data;
      console.log(this.airlineImages);
    });

    this.strapi.getHomeBannerSlider().subscribe(data => {
      this.homeBannerSlides = data;
      console.log(this.homeBannerSlides);
    });

    this.getLabel('home-banner-title');
    this.getLabel('from-dropdown');
    this.getLabel('to-dropdown');
    this.getLabel('serach-flight-checkbox-text-1');
    this.getLabel('serach-flight-checkbox-text-2');
    this.getLabel('home-banner-airline-title');
    this.getMedia('Search Flight');
  }

  returnDateMin() {
    if ((this.returnDate < this.departDate)) {
      this.returnDate = undefined;
    }
    this.returnMinDate = {
      year: this.departDate.getFullYear(),
      month: this.departDate.getMonth() + 1,
      day: this.departDate.getDate()
    };
    console.log(this.returnMinDate);

  }

  test() {
    this.fromControl.setValue(null);
  }
  test1() {
    this.toControl.setValue(null);
  }
  exchangeFromTo() {
    const temp=this.fromControl.value
    this.fromControl.setValue(this.toControl.value) ;
    this.toControl.setValue(temp);
    console.log("fromvalue",this.fromControl.value);
    console.log("tovalue",this.toControl.value);
  }
  getLabel(name: any) {
    this.strapi.getLabel(name).subscribe(data => {
      this.labels[name] = data[0].value;
    });
  }

  getMedia(name: any) {
    this.strapi.getMedia(name).subscribe(data => {
      this.media['search-flight-btn'] = this.strapiURL + data[0].photopath[0].url;
      this.media['search-flight-text'] = data[0].photoname;
    });
  }

  changeFlightType(flightTripType: string) {
    this.selectedFlightTripType = flightTripType;
  }

}
