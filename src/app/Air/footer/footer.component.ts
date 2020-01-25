import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../services/strapi/strapi.service';
import { HomeService } from '../../services/home/home.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  strapiURL = 'https://cms.travelsouq.com/';
  footerData: any = [];
  footerSocialIcons: any;
  footerCardImages: any;
  labels: any = {
    'subscribe-text': '',
    'footer-copyright': ''
  };
  subscribeForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  emailReq = '';
  emailPat = '';

  constructor(private strapi: StrapiService, private homeService: HomeService) { }

  ngOnInit() {
    this.strapi.getFooterMenu()
      .subscribe(data => {
        this.footerData = data;

      });
    this.strapi.getFooterSocialIcons().subscribe((data) => {
      this.footerSocialIcons = data;
    });
    this.strapi.getFooterCardImages().subscribe((data) => {
      this.footerCardImages = data;
    });
    this.getLabel('subscribe-text');
    this.getLabel('footer-copyright');

    // email validation
    this.subscribeForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ])
    });
  }

  getLabel(name: any) {
    this.strapi.getLabel(name).subscribe((data) => {
      this.labels[name] = data[0].value;
    });
  }

  onSubscribeEmail() {

    if (this.subscribeForm.controls.email.hasError('required')) {
      console.log('req error');
      this.emailReq = 'email is required';
    }

    if (this.subscribeForm.controls.email.hasError('pattern')) {
      console.log('pattern error');
      this.emailPat = 'email is not valid';
      this.emailReq = '';
    }

    if (this.subscribeForm.controls.email.valid) {
      console.log('valid');
      this.emailReq = '';
      this.emailPat = '';

      const data = {
        email: this.subscribeForm.controls.email.value
      };
      console.log(data);

      this.homeService.subscribeEmail(data)
        .subscribe(res => {
          console.log(res);

        });
    }

  }

}
