import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Air/home/home.component';
import { HeaderComponent } from './Air/header/header.component';
import { StrapiService } from './services/strapi/strapi.service';
import { FooterComponent } from './Air/footer/footer.component';
import { PopularCountryComponent } from './Air/home/popular-country/popular-country.component';
import { AboutTravelsouqComponent } from './Air/home/about-travelsouq/about-travelsouq.component';
import { OffersStoreComponent } from './Air/home/offers-store/offers-store.component';
import { PopularDestinationsComponent } from './Air/home/popular-destinations/popular-destinations.component';
import { ReadyFlyComponent } from './Air/home/ready-fly/ready-fly.component';
import { HomeService } from './services/home/home.service';
import { HomeSliderComponent } from './Air/home/home-slider/home-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './services/pipeServices/filter.pipe';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {OverlayModule} from '@angular/cdk/overlay';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PopularCountryComponent,
    AboutTravelsouqComponent,
    OffersStoreComponent,
    PopularDestinationsComponent,
    ReadyFlyComponent,
    HomeSliderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OwlModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbDatepickerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule
  ],
  providers: [
    StrapiService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
