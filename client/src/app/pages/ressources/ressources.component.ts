import { Component, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.scss']
})
export class RessourcesComponent implements OnInit {

  constructor() { }
 public fileUploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
  ngOnInit() {
  }

}
