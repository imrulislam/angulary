import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minimal-one',
  templateUrl: './minimal-one.component.html',
  styleUrls: ['./minimal-one.component.scss']
})
export class MinimalOneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
