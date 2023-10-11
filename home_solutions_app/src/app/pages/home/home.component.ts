import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageData } from 'src/app/models/message';
import { ApiService } from 'src/app/services/api.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fullname: string = '';
  phone: string = '';
  message: string = '';
  iconClass: string = 'arrow-down';

  accordionItems = [
    {
      headerText: 'Affordable prices',
      content: 'Our prices are very affordable.',
      isExpanded: false,
    },
    {
      headerText: '1 year warranty for any parts replaced',
      content: 'We give 1 year warranty for any appliance parts we replaced.',
      isExpanded: false,
    },
    {
      headerText: 'Same day delivery',
      content: 'We deliver appliances to customers on the same day.',
      isExpanded: false,
    },
    {
      headerText: 'Best Customer Service',
      content: 'You wont regret choosing to work with us.',
      isExpanded: false,
    },
    {
      headerText: 'Safe handling of appliances',
      content: 'We handle all appliances with care.',
      isExpanded: false,
    },
    {
      headerText: 'Fast response team',
      content:
        'We have a very solid team whose response to customers is quick.',
      isExpanded: false,
    },
    // Add more items as needed
  ];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private elementRef: ElementRef
  ) {}

  toggleContent(index: number) {
    this.accordionItems.forEach((item, i) => {
      if (i === index) {
        item.isExpanded = !item.isExpanded;
      } else {
        item.isExpanded = false;
      }
    });
  }

  ngOnInit(): void {
    const faders = document.querySelectorAll('.fade-in')!;
    const sliders = document.querySelectorAll('.slide-in')!;

    const options = {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -250px 0px',
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    faders.forEach((fade) => {
      observer.observe(fade);
    });

    sliders.forEach((slider) => {
      observer.observe(slider);
    });
  }
}
