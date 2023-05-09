import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";
import { environment } from "src/environments/environment";
import { ThemeService } from "./core/services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "liuliuqiu-web-app";
  themeClass = environment.theme.themeClassDefault;
  themeModel = environment.theme.themeModel.light; // light-model, dark-model
  env = environment;
  showFiller = false;

  mainMenuList = [
    { name: "Course", link: "course", icon: "menu_book", active: true },
    { name: "HCT", link: "hct", icon: "home", active: false },
    { name: "佛", link: "buddha", icon: "temple_buddhist", active: false },
    { name: "道", link: "tao", icon: "all_inclusive", active: false },
    { name: "外星文明", link: "alien", icon: "outlet", active: false },
    { name: "地球文明", link: "earth", icon: "public", active: false },
  ];
  constructor(private themeService: ThemeService, private router: Router) {
    this.themeService.getThemeClass().subscribe((_themeClass: string) => {
      this.themeClass = _themeClass;
    });

    this.themeService.getThemeModel().subscribe((_themeModel: string) => {
      this.themeModel = _themeModel;
    });

    router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: any) => {
      // console.log(event.url);
      this.mainMenuList.forEach((menu: any) => {
        if (event.url.includes(menu.link)) {
          menu.active = true;
        } else {
          menu.active = false;
        }
      });
    });

  }

  pickTheme(themeClass: string) {
    this.themeService.setThemeClass(themeClass);

    // 设置浏览器的主题颜色
    let b900Color = window
      .getComputedStyle(b900, null)
      .getPropertyValue("background-color");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", b900Color);
  }

  setThemeModel(themeModel: string) {
    this.themeService.setThemeModel(themeModel);
  }
}
