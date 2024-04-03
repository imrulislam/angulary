import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minimal-two',
  templateUrl: './minimal-two.component.html',
  styleUrls: ['./minimal-two.component.scss']
})
export class MinimalTwoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
