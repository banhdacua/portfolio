import { Component, ElementRef } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-reponsive',
  templateUrl: './reponsive.component.html',
  styleUrls: ['./reponsive.component.css']
})
export class ReponsiveComponent {
  constructor(private element: ElementRef, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    .subscribe({
      next: (result: any) => {
        for(let breakpoint of Object.keys(result.breakpoints)) {
          if(result.breakpoints[breakpoint]) {
            if(breakpoint == Breakpoints.HandsetPortrait) {
              this.element.nativeElement.classList.remove('pc');
              console.log(result);
            }
            if(breakpoint == Breakpoints.WebLandscape) {
              this.element.nativeElement.classList.add('pc');
              console.log(result);
            }
          }
          console.log(result);
        }
      }
    })
  }
}
