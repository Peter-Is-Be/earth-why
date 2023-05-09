import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Hct, argbFromHex, rgbaFromArgb, themeFromSourceColor, applyTheme, sourceColorFromImage }
  from "@material/material-color-utilities";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements AfterViewInit {
  @ViewChild('bannerImage') bannerImage: ElementRef | undefined;
  fromColor = '#6750A4';
  theme: any;

  constructor() {
    this.theme = themeFromSourceColor(argbFromHex(this.fromColor));
  }

  ngAfterViewInit(): void {
    if (this.bannerImage) {

      const imgPannel = this.bannerImage.nativeElement as HTMLImageElement;

      sourceColorFromImage(imgPannel).then((value: number) => {
        const valueHex = value.toString(16);
        console.log('value', value, 'valueHex', valueHex);
        this.theme = themeFromSourceColor(argbFromHex(valueHex));
      })
    }
  }

  hexStr(model: string, key: string) {
    return '#' + this.theme.schemes[model].props[key].toString(16).slice(2);
  }
}
