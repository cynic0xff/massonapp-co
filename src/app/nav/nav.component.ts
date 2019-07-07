import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    //menu text
    btn_toggle_text: string = "toggle_off";

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggle_menu() {

  if(this.btn_toggle_text == 'toggle_on')
     this.btn_toggle_text = 'toggle_off';
    else
      this.btn_toggle_text = 'toggle_on';
  }
}
