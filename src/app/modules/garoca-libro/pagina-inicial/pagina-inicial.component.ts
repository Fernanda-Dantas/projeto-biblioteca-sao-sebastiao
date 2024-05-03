import { Component, HostListener, Inject, Input, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
    selector     : 'pagina-inicial',
    standalone: true,
    imports: [MatSlideToggleModule],
    templateUrl  : './pagina-inicial.component.html',
    styleUrls: ['./pagina-inicial.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class PaginaInicialComponent
{


    ngOnInit(): void {

    }

}