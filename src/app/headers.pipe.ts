import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headers'
})
export class HeadersPipe implements PipeTransform {
  private buffer: string = '';
  transform(value: any, args?: any): any {
    this.buffer = value;
    switch (value) {
      case 'id':
        this.buffer = 'ID';
        break;
    
      case 'requesttype':
        this.buffer = 'Request Type';
        break;
    
      case 'submitdate':
        this.buffer = 'Submit Date';
        break;
    
      case 'modificationdate':
        this.buffer = 'Modification Date';
        break;
    
      case 'statusnextstep':
        this.buffer = 'Status Next Step';
        break;
    
      case 'solutiondescription':
        this.buffer = 'Solution Description';
        break;
    
      case 'changeid':
        this.buffer = 'Change ID';
        break;
    
      case 'workflowstatus':
        this.buffer = 'Workflow Status';
        break;
    
      case 'changenote':
        this.buffer = 'Change Note';
        break;
    
      default:
        this.buffer = value.charAt(0).toUpperCase() + value.slice(1);
        break;
    };
    return this.buffer;
  };
}
