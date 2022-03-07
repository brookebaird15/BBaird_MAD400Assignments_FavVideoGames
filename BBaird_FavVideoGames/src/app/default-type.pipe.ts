import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(game: Content[], dType?: string): Content[] {
    return game.filter(item => item.type?.toUpperCase() === dType?.toUpperCase())
  }

}
