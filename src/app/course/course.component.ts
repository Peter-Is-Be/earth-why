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
  @ViewChild('imageInput') imageInput: ElementRef | undefined;
  fromColor = '#6750A4';
  theme: any;

  constructor() {
    this.theme = themeFromSourceColor(argbFromHex(this.fromColor));
  }

  ngAfterViewInit(): void {
    this.buildThemeFromBannerImage();
  }

  buildThemeFromBannerImage() {
    console.log('buildThemeFromBannerImage');

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

  // 点击选择图片按钮
  chooseImage() {
    if (this.imageInput) {
      const imageInputElement = this.imageInput.nativeElement as HTMLInputElement;
      imageInputElement.click();
    }
  }

  // 用户选择图片后，处理图片
  imageChoosed(event: any) {
    console.log('imageChoosed');
    console.log(event);

    if (this.bannerImage) {
      const imgElement = this.bannerImage.nativeElement;
      imgElement.src = URL.createObjectURL(event.target.files[0]);
      imgElement.onload = () => {
        URL.revokeObjectURL(imgElement.src) // free memory
        this.buildThemeFromBannerImage();
      }
    }

  }
}
