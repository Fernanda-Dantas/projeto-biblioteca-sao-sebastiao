import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../shared/shared.module';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { paginaInicialRoutes } from './pagina-inicial.component.routing';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
    declarations: [

        
    ],
    imports     : [
        PaginaInicialComponent,
        RouterModule.forChild(paginaInicialRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatSlideToggleModule
    ],
    providers: [
       
    ]
})
export class PaginaInicialModule
{
}
