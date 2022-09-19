import { Component, OnInit } from '@angular/core';

//font awesome icons imports

import { faUtensils } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faUtensils = faUtensils


  constructor() { }

  ngOnInit(): void {
  }

}
