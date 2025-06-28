import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount',
  standalone: true
})
export class WordCountPipe implements PipeTransform {

  transform(value: string): number {
    if (!value) return 0;
    
    return value.trim().split(/\s+/).length;
  }

}
