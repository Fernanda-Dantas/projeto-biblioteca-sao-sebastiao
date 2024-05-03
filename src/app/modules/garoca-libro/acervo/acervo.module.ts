import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../shared/shared.module';
import { AcervoComponent } from './acervo.component';
import { acervoRoutes } from './acervo.routing';



@NgModule({
    declarations: [
       AcervoComponent,
        
    ],
    imports     : [
        RouterModule.forChild(acervoRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule
    ],
    providers: [
       
    ]
})
export class AcervoModule
{
}
