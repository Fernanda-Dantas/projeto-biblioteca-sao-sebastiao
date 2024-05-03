import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../shared/shared.module';
import { VitrineLivrosComponent } from './vitrine-livros.component';
import { vitrineLivrosRoutes } from './vitrine-livros.routing';



@NgModule({
    declarations: [
        VitrineLivrosComponent,
        
    ],
    imports     : [
        RouterModule.forChild(vitrineLivrosRoutes),
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
