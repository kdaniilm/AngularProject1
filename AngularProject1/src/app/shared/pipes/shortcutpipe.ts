import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'shortcut'})
export class ShortCutPipe implements PipeTransform{

    transform(value: string, args?: number): string{
        return `${value.substring(0, args)}.....`;
    }
}