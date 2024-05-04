import { Component, HostListener, Inject, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
    selector     : 'tela-usuario',
    standalone: true,
    imports: [MatDividerModule, MatListModule, MatButtonModule, MatToolbarModule],
    providers: [],
    templateUrl  : './tela-usuario.component.html',
    styleUrls: ['./tela-usuario.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class TelaUsuarioComponent
{


    ngOnInit(): void {

    }

}