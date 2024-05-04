import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../shared/shared.module';
import { TelaUsuarioComponent } from './tela-usuario.component';
import { telaUsuarioRoutes } from './tela-usuario.routing';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
    declarations: [

        
    ],
    imports     : [
        TelaUsuarioComponent,
        RouterModule.forChild(telaUsuarioRoutes),
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatToolbarModule,
        MatButtonModule,
        SharedModule
    ],
    providers: [
       
    ]
})
export class TelaUsuarioModule
{
}
