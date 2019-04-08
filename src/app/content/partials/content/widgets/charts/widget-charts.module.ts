import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { JunDoughnutChartComponent } from './jun-doughnut-chart/jun-doughnut-chart.component';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		ChartsModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		BarChartComponent,
		DoughnutChartComponent,
		JunDoughnutChartComponent
	],
	declarations: [
		BarChartComponent,
		DoughnutChartComponent,
		JunDoughnutChartComponent
	]
})
export class WidgetChartsModule {}
