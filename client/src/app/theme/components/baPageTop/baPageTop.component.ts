import {Component, OnInit} from '@angular/core';
import {GlobalState} from '../../../global.state';
import { Router } from '@angular/router';
import { User } from '../../../models/index';
import { AuthenticationService } from '../../../services/index';
import { AppConfig } from '../../../app.config';

@Component({
   moduleId: module.id,
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss'],
  providers: [AuthenticationService,AppConfig]
})
export class BaPageTop implements OnInit {
 currentUser: User;
  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;
  public logged:boolean =false;
  constructor(private _state:GlobalState,private authenticationService: AuthenticationService,private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
    this.isMenuCollapsed = isCollapsed;
       this.logged=this.authenticationService.isLogged();

    });
  }
ngOnInit() {
        // To get the status of the user , 

    }
  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }
public logout()
{
    this.authenticationService.logout();
    this.router.navigate(['/']);

}
  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
