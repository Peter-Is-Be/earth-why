import {Component} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ThemeService} from "src/app/core/services/theme.service";

@Component({
  selector: "app-buddha-index",
  templateUrl: "./buddha-index.component.html",
  styleUrls: ["./buddha-index.component.scss"],
})
export class BuddhaIndexComponent {
  themeModel$: BehaviorSubject<string>;
  constructor(private themeService: ThemeService) {
    this.themeModel$ = themeService.getThemeModel();
  }
}
