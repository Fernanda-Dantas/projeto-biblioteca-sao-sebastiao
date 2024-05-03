import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LandingPageComponent } from './landing-page.component';
import { landingPageRoutes } from './landing-page.routing';
import { SharedModule } from '../../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';


@NgModule({
    declarations: [
        
    ],
    imports     : [
        LandingPageComponent,
        RouterModule.forChild(landingPageRoutes),
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
        MatCardModule,
        SharedModule
    ],
    providers: [
       
    ]
})
export class LandingPageModule
{
}
