import {Component} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {ThemeService} from "src/app/core/services/theme.service";

@Component({
  selector: "app-tao-index",
  templateUrl: "./tao-index.component.html",
  styleUrls: ["./tao-index.component.scss"],
})
export class TaoIndexComponent {
  themeModel$: BehaviorSubject<string>;
  constructor(private themeService: ThemeService) {
    this.themeModel$ = themeService.getThemeModel();
  }
}
