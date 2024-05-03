import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../shared/shared.module';
import { TelaUsuarioComponent } from './tela-usuario.component';
import { telaUsuarioRoutes } from './tela-usuario.routing';



@NgModule({
    declarations: [
        TelaUsuarioComponent,
        
    ],
    imports     : [
        RouterModule.forChild(telaUsuarioRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule
    ],
    providers: [
       
    ]
})
export class TelaUsuarioModule
{
}
