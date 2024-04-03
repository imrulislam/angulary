import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minimal-three',
  templateUrl: './minimal-three.component.html',
  styleUrls: ['./minimal-three.component.scss']
})
export class MinimalThreeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
