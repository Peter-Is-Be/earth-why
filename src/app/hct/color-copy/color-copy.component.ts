import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-color-copy',
  templateUrl: './color-copy.component.html',
  styleUrls: ['./color-copy.component.scss']
})
export class ColorCopyComponent {

  @Input()
  colorValue: string = '';

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }


  _state = false;
  show() {
    this._state = true;
  }

  hide() {
    this._state = false;
  }


  _colorValueState = false;
  showValue() {
    this._colorValueState = true;
  }
  hideValue() {
    this._colorValueState = false;
  }


  copy() {
    if (this.clipboard.copy(this.colorValue)) {
      this._snackBar.open('已复制', '', { duration: 1000 });
    } else {
      this._snackBar.open('Error: 复制失败', '', { duration: 1000 });
    }
  }
}
