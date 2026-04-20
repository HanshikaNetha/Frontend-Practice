import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'truncate',
})
export class TruncatePipe implements PipeTransform{
    transform(str: String, max=20, trail='...'):String{
        if(!str) return '';
        if(str.length<=max) return str;
        return str.substring(0, max)+trail;
    }
}