import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSticky = false;


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 200;
  }

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit() {
  }

  public onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
