import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }



  goToMainDesign(routeName: string) {
    this.router.navigate(['minimal', routeName]);
  }


}
