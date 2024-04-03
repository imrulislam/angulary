import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  isSticky = false;

  images = [
    {
      id: '1',
      image: 'purpose.svg'
    },
    {
      id: '2',
      image: 'who-we-are.svg'
    },
    {
      id: '3',
      image: 'what-we-do.svg'
    }
  ];

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 200;
  }

  constructor() { }

  ngOnInit() {
    (document.querySelector('#myImg') as HTMLImageElement).src = 'assets/images/' + this.images[0].image;
  }

  changeAboutUsImage(id: string) {
    for (const element of this.images) {
      if (id === element.id) {
        (document.querySelector('#myImg') as HTMLImageElement).src = 'assets/images/' + element.image;
      }
    }
  }
}
