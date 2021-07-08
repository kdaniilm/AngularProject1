import {Directive, ElementRef } from '@angular/core';
import { SetColorService } from '../services/set-color-service';

@Directive({
    selector: '[change-color]'
})
export class ChangeColorDirective{
    constructor(private elementRef: ElementRef, private colorService: SetColorService){
        // var color = Math.floor(Math.random() *123912736).toString(16);

        // this.elementRef.nativeElement.style.color = '#000000'.slice(0, -color.length) + color;
        this.elementRef.nativeElement.style.color = colorService.color;
    }
}