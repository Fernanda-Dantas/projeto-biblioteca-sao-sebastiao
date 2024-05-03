import { Component, HostListener, Inject, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@Component({
    selector     : 'landing-page-biblioteca',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule],
    providers: [],
    templateUrl  : './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent
{


    ngOnInit(): void {

    }

}