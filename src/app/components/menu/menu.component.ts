import { Component, OnInit } from '@angular/core';

import { faMinus } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faMinus = faMinus;

  constructor() { }

  ngOnInit(): void {
  }

}
