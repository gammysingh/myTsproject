import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    console.log("iii", items);
    console.log("sss", searchText)
    if (!items) return [];
    if (!searchText) return items;
    if (searchText.length > 1) {
      searchText = searchText.toLowerCase();
      return items.filter(airport => {
        console.log("airport", airport)
        return (airport.code.toLowerCase().includes(searchText) || airport.city.toLowerCase().includes(searchText) || airport.country.toLowerCase().includes(searchText));
      });
    }
  }

}
