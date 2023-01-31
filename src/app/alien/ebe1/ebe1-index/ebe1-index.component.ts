import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Component, OnDestroy} from "@angular/core";
import {MatDrawerMode} from "@angular/material/sidenav";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: "app-ebe1-index",
  templateUrl: "./ebe1-index.component.html",
  styleUrls: ["./ebe1-index.component.scss"],
})
export class Ebe1IndexComponent implements OnDestroy {
  drawerMode: MatDrawerMode = "side";
  drawerHasBackdrop = false;
  drawerOpened = true;
  isMobile = false;
  chaptName = "来自马克艾罗伊夫人的信件";

  destroyed = new Subject<void>();

  isFixed = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        console.log(result.breakpoints);
        console.log("result.matches", result.matches);
        if (result.matches) {
          this.drawerMode = "over";
          this.drawerHasBackdrop = true;
          this.drawerOpened = false;
          this.isMobile = true;
        } else {
          this.drawerMode = "side";
          this.drawerHasBackdrop = false;
          this.drawerOpened = true;
          this.isMobile = false;
        }
      });

    document.addEventListener("scroll", (event) => {
      console.log("window.scrollY", window.scrollY);
      // if (window.scrollY > 64 && !this.isMobile) {
      //   if (!this.isFixed) this.isFixed = true;
      // } else {
      //   if (this.isFixed) this.isFixed = false;
      // }
    });
  }

  closeDrawerOnMobile(event: Event) {
    console.log(event);
    if (this.isMobile && this.drawerOpened) {
      this.drawerOpened = false;
    }
    const elem = event.target as HTMLElement;
    this.chaptName = elem.innerText;
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
