import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'jun-progress-card',
	templateUrl: './jun-progress-card.component.html',
	styleUrls: ['./jun-progress-card.component.scss']
})
export class JunProgressCardComponent implements OnInit {

    @Input()
    title:string = 'DEFAULT';

    @Input()
    count: number = 0;

    @Input()
    percentage: number = 0;

    @Input()
    progressType: string = 'success';

	constructor () { }

	ngOnInit () {
	}


}
