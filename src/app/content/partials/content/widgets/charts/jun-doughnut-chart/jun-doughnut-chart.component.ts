import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
const moment = _rollupMoment || _moment;

@Component({
	selector: 'jun-m-doughnut-chart',
	templateUrl: './jun-doughnut-chart.component.html',
	styleUrls: ['./jun-doughnut-chart.component.scss'],
	providers: [
		// `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
		// `MatMomentDateModule` in your applications root module. We provide it at the component level
		// here, due to limitations of our example generation script.
		  {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
		  {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
		]
})
export class JunDoughnutChartComponent implements OnInit {

	@ViewChild('doughnutcanvas')
	canvas:ElementRef;

	@Input()
	title: string = 'Default';

	options: any = {
		cutoutPercentage: 80
	};
	// Doughnut
	public doughnutChartLabels: string[] = ['Rejected', 'Business Events', 'Others'];
	public doughnutChartColors: any[] =[
		{ 
		  backgroundColor:["#F8B44B", "#726ABD", "#46BCA0"] 
		}];
	public doughnutChartData: number[] = [37, 47, 19];
	public doughnutChartType: string = 'doughnut';

	date = new NgbDate(2019, 3, 27);
	constructor () { 
		
	}

	ngOnInit(){
	
	}
	
	

}
