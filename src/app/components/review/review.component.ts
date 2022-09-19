import { Component, OnInit } from '@angular/core';

//font awesome icons imports

import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  faQuoteRight = faQuoteRight;
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
