import {Component} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ThemeService} from "src/app/core/services/theme.service";

@Component({
  selector: "app-alien-index",
  templateUrl: "./alien-index.component.html",
  styleUrls: ["./alien-index.component.scss"],
})
export class AlienIndexComponent {
  themeModel$: BehaviorSubject<string>;
  constructor(private themeService: ThemeService) {
    this.themeModel$ = themeService.getThemeModel();
  }
}
