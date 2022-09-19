import { Component, OnInit } from '@angular/core';

//font awesome icons imports 

import { faRightLong } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faRightLong = faRightLong
  constructor() { }

  ngOnInit(): void {
  }

}
