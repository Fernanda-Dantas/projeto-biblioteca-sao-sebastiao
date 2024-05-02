import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LandingPageComponent } from './landing-page.component';
import { landingPageRoutes } from './landing-page.routing';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
    declarations: [
        LandingPageComponent,
        
    ],
    imports     : [
        RouterModule.forChild(landingPageRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule
    ],
    providers: [
       
    ]
})
export class LandingPageModule
{
}
