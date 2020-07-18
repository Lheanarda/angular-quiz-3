import { Component } from '@angular/core';
@Component({
    selector: 'app-display',
    templateUrl : './display.component.html',
    // styles:[`
    //     .textWhite{
    //         color: white;
    //     }
    // `]

    styleUrls: ['./display.component.css']
})
export class DisplayComponent{
    onShow = true;
    i = 0;
    // numbers = [];
    timeStamps=[];

    onDisplayClick(){
        this.onShow = this.onShow===true ? false : true;
        this.i++;
        // this.numbers.push(this.i);
        this.timeStamps.push(new Date);
    }
}