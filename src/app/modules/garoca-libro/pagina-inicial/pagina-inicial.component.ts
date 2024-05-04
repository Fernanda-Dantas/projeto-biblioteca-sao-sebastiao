import { Component, HostListener, Inject, Input, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from "../../../shared/shared.module";


@Component({
    selector: 'pagina-inicial',
    standalone: true,
    templateUrl: './pagina-inicial.component.html',
    styleUrls: ['./pagina-inicial.component.css'],
    encapsulation: ViewEncapsulation.None,
    imports: [MatSlideToggleModule, SharedModule]
})
export class PaginaInicialComponent
{


    ngOnInit(): void {

    }

}