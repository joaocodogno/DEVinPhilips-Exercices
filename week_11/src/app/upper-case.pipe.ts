import { Pipe, PipeTransform } from '@angular/core';
import { forkJoin } from 'rxjs';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: String): String {
    const words: any = value.split(" ")
    words.forEach(word => {
      return word = word[0].toUpperCase + word.substr(1)
    });
    return words
  }

}
