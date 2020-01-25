import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StrapiService {
  url = 'https://cms.travelsouq.com/';
  logo = '';
  constructor(private http: HttpClient) { }

  getLogo() {
    return this.http.get(`${this.url}photos?photoname=logo`);
  }

  getLanguage() {
    return this.http.get(`${this.url}languages`);
  }

  getCurrency() {
    return this.http.get(`${this.url}currencies`);
  }

  getFlightTripType() {
    return this.http.get(`${this.url}flighttriptypes`);
  }

  getAirlineImages() {
    return this.http.get(`${this.url}airlineimages`);
  }

  getHomeBannerSlider() {
    return this.http.get(`${this.url}homebannerbacksliders`);
  }

  getLabel(name) {
    return this.http.get(`${this.url}labels?name=${name}`);
  }

  getMedia(name) {
    return this.http.get(`${this.url}photos?photoname=${name}`);
  }

  getOffersInStore() {
    return this.http.get(`${this.url}offersinstores`);
  }
  getCountriesData() {
    return this.http.get(`${this.url}popularcountries`);
  }

  getAboutTravelSouq() {
    return this.http.get(`${this.url}abouttravelsouqs`);
  }

  getReadyToFly() {
    return this.http.get(`${this.url}readytoflies`);
  }

  getFooterMenu() {
    return this.http.get(`${this.url}footermenus`);
  }
  getFooterSocialIcons() {
    return this.http.get(`${this.url}footersocialicons`);
  }
  getFooterCardImages() {
    return this.http.get(`${this.url}footercardimages`);
  }
  getAirportList() {
    return this.http.get(`${this.url}airportlists`);
  }
}
