import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../shared/shared.module';
import { LoginComponent } from './tela-login.component';
import { loginRoutes } from './tela-login.routing';



@NgModule({
    declarations: [
        LoginComponent,
        
    ],
    imports     : [
        RouterModule.forChild(loginRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule
    ],
    providers: [
       
    ]
})
export class LoginModule
{
}
