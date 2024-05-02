import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsModule } from './common/settings/settings.module';


const layoutModules = [

];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports     : [
        SharedModule,
        SettingsModule,
    ],
    exports     : [
        LayoutComponent,

    ]
})
export class LayoutModule
{
}
