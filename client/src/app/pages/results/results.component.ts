import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
public charts=[
	{info:" Test are done"
, number:127
},
	{info:"ms total excution time",
number:520},
	{info:"  ERR",
number:0.75}];
  constructor() { }

  ngOnInit() {
  }

}
