import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    },
    // {
    //   provide: NG_VALIDATORS, useExisting: forwardRef(() => ImageListSelectComponent),
    //   multi: true
    // }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {

  @Input() cols = 6;
  @Input() rowHeight = '64px';
  @Input() itemWidth = '80px';
  @Input() title = '选择';
  @Input() items: string[] = [];
  @Input() useSvgIcon = false;

  selected: string;

  constructor() {
  }

  // ngOnInit() {
  // }
  private propagateChange = (_: any) => {};
  onChange(i) {
    this.selected = this.items[i];
    this.propagateChange(this.selected);
  }

  writeValue(obj: any): void {
    this.selected = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void { }

  validator(c: FormControl): { [key: string]: any } {
    return this.selected ? null : {
      imageListInvalid: {
        valid: false
      }
    };
  }
}
