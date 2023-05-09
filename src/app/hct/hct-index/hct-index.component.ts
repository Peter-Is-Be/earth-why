import { Component } from '@angular/core';
import { Hct, argbFromHex, rgbaFromArgb, themeFromSourceColor, applyTheme, sourceColorFromImage }
  from "@material/material-color-utilities";


@Component({
  selector: 'app-hct-index',
  templateUrl: './hct-index.component.html',
  styleUrls: ['./hct-index.component.scss']
})
export class HctIndexComponent {

  theme: any;
  fromColor = '#6750A4';
  customColor = "#ff0000";
  constructor() {
    // #region HCT颜色理论测试  theme中数值都是argb，css中不支持，需要转换为rgba类型颜色才能正常使用
    // Simple demonstration of HCT.
    const color = Hct.fromInt(0xff4285f4);
    console.log('------------------------ HCT --------------------------');
    console.log('HCT==>', JSON.stringify(color, null, 2), '\n--------------------------------------------------\n');
    // Get the theme from a hex color
    const rgba = rgbaFromArgb(color.toInt());
    console.log('rgba', `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`);

    this.theme = themeFromSourceColor(argbFromHex(this.fromColor), [
      {
        name: "custom-1",
        value: argbFromHex(this.customColor),
        blend: true,
      },
    ]);

    this.theme.palettes.primary.getHct()

    // Print out the theme as JSON
    console.log('Theme==>', this.theme, '\n--------------------------------------------------\n');


    // Check if the user has dark mode turned on
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    console.log("systemDark==>", systemDark, '\n--------------------------------------------------\n');

    // Apply the theme to the body by updating custom properties for material tokens
    applyTheme(this.theme, { target: document.body, dark: systemDark });

  }

  // HctSolver
  save() {
    this.theme = themeFromSourceColor(argbFromHex(this.fromColor), [
      {
        name: "custom-1",
        value: argbFromHex(this.customColor),
        blend: true,
      },
    ]);


    console.log('Apply Theme==>', this.theme, '\n--------------------------------------------------\n');
  }


  /**
   * HCT中数值都是argb，css中不支持，需要转换为rgba类型颜色才能正常使用
   * @param argb argb int value
   * @reutrn rgba string. e.g. "rgba(103,80,164,255)"
   */
  rgbaStr(argb: number) {
    const rgba = rgbaFromArgb(argb);
    return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
  }

  hexStr(model: string, key: string) {
    return '#' + this.theme.schemes[model].props[key].toString(16).slice(2);
  }


  // 计算图片
  calcImage(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    const imgPannel = event.target as HTMLImageElement;
    console.log(imgPannel);

    const imgEle = imgPannel.firstChild as HTMLImageElement;

    console.log(imgEle);

    sourceColorFromImage(imgPannel).then((value: number) => {
      const valueHex = value.toString(16);
      console.log('value', value, 'valueHex', valueHex);
      this.theme = themeFromSourceColor(argbFromHex(valueHex), [
        {
          name: "custom-1",
          value: argbFromHex(this.customColor),
          blend: true,
        },
      ]);
    })


  }
  // #endregion HCT颜色理论测试 
}
