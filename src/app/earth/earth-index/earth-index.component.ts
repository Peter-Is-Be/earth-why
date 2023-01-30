import {Component} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ThemeService} from "src/app/core/services/theme.service";

@Component({
  selector: "app-earth-index",
  templateUrl: "./earth-index.component.html",
  styleUrls: ["./earth-index.component.scss"],
})
export class EarthIndexComponent {
  themeModel$: BehaviorSubject<string>;
  constructor(private themeService: ThemeService) {
    this.themeModel$ = themeService.getThemeModel();
  }
}
