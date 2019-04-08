import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { JunDoughnutChartComponent } from './jun-doughnut-chart/jun-doughnut-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbButtonsModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		CommonModule,
		ChartsModule,
		NgbButtonsModule,
		NgbDatepickerModule,
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
