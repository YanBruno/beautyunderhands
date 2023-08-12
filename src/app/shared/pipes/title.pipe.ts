import { Pipe, PipeTransform } from '@angular/core';
import { Title } from 'src/app/core/models/title.model';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(title: Title): string {
    return title.value;
  }

}
