import { Component, HostListener, Inject, Input, ViewEncapsulation } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree'; // Importe NestedTreeControl
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
    selector     : 'landing-page-biblioteca',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatTreeModule, MatIconModule],
    templateUrl  : './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent
{


   
   
 }




