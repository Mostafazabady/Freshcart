import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(text:string): string {
    return text.split(' ').splice(0,3).join(' ');
  }

}
