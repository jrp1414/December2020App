import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/product';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[],filterText:string): Product[] {
    if (filterText.length<3) {
      return value;
    }
    // return value.filter((obj)=>obj.productName.toLowerCase().indexOf(filterText.toLowerCase()) != -1);
    return value.filter((obj)=>obj.productName.toLowerCase().startsWith(filterText.toLowerCase()));
    //Leaf Rake
    //abc - -1
  }

}
