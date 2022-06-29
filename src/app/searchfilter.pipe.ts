import { Pipe, PipeTransform } from '@angular/core';
import { Events } from './product';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(eve: Events[], searchValue: String): Events[] {
    if(!eve || !searchValue){
      return eve;
  }
  return eve.filter(prod =>
   prod.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),);
   
}

}