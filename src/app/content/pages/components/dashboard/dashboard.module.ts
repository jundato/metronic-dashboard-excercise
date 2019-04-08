import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layout/layout.module';
import { PartialsModule } from '../../../partials/partials.module';
import { ListTimelineModule } from '../../../partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../../../core/core.module';
import { CodePreviewModule } from '../../../partials/content/general/code-preview/code-preview.module';
import { MaterialPreviewModule } from '../../../partials/content/general/material-preview/material-preivew.module';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		NgbModule,
		CodePreviewModule,
		CoreModule,
		LayoutModule,
		MaterialPreviewModule,
		ListTimelineModule,
		WidgetChartsModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			}
		])
	],
	providers: [],
	declarations: [DashboardComponent]
})
export class DashboardModule {}
