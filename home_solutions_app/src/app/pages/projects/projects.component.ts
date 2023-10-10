import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  images = [
    { src: 'assets/daewoo.jpeg', brand: 'Daewoo' },
    { src: 'assets/hitachi.jpeg', brand: 'Hitachi'},
    { src: 'assets/lg3.jpeg', brand: 'LG'},
    { src:  'assets/bosch.jpeg', brand: 'Bosch'},

    { src: 'assets/bompani.jpeg', brand: 'Bompani'},
    { src: 'assets/candy.jpeg', brand: 'Candy'},
    { src: 'assets/indesit.jpeg', brand: 'Indesit'},
    { src: 'assets/whirlpool.jpeg', brand: 'Whirlpool'},

    { src: 'assets/samsung.jpeg', brand: 'Samsung'},
    { src: 'assets/miele.jpeg', brand: 'Miele'},
    { src: 'assets/whirlpool2.jpeg', brand: 'Whirlpool'},
    { src: 'assets/artison.jpeg', brand: 'Ariston'},

    { src: 'assets/bosch2.jpeg', brand: 'Bosch'},
    { src: 'assets/bosch3.jpeg', brand: 'Bosch'},
    { src: 'assets/lg4.jpeg', brand: 'LG'},
    { src: 'assets/sam2.jpeg', brand: 'Samsung'},
  ];

  currentIndex = 0;

  @ViewChild('galleryContainer') galleryContainer!: ElementRef ;

  showPreview(index: number): void {
    this.currentIndex = index;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.slideGallery('next');
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.slideGallery('prev');
  }

  private slideGallery(direction: 'next' | 'prev'): void {
    const galleryWidth = this.galleryContainer.nativeElement.offsetWidth;
    const distance = direction === 'next' ? -galleryWidth : galleryWidth;

    this.galleryContainer.nativeElement.style.transition =
      'transform 0.3s ease-in-out';
    this.galleryContainer.nativeElement.style.transform = `translateX(${distance}px)`;

    setTimeout(() => {
      this.galleryContainer.nativeElement.style.transition = 'none';
      this.galleryContainer.nativeElement.style.transform = 'translateX(0)';
    }, 300);
  }

  constructor() {}

  ngOnInit(): void {}
}
