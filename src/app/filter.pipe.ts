import { Player } from './player.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Player[], sName: string): any {

    if(sName==="")
    {
      return value;
    }
    const playersArray:Player[]=[];
    for(let i=0; i<=value.length;i++)
    {
      //console.log("in transform " + value[i].team);
      console.log(typeof(value[i]));
      let teamName:string = (value[i] as Player).team;
      console.log("team name " + teamName);
      if(teamName.startsWith(sName)){
        playersArray.push(value[i]);
      }
    }
    return playersArray;
  }

}
