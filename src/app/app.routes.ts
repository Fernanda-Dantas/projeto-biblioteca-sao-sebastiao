
import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
// import { Router } from '@angular/router';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const routes: Route[] = [

    { path: '', pathMatch: 'full', redirectTo: 'welcome/index' },
    // {path: '', pathMatch : 'full', redirectTo: 'subscription'},

    //
    // After the user signs in, the Login page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'welcome/index' },
    // {path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'subscription'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [],
        canActivateChild: [],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        }, children: [
        ]
    },
    {
        path: '',
        canActivate: [],
        canActivateChild: [],
        component: LayoutComponent,
        resolve: {
           
        },
        data: {
            layout: 'empty'
        },
        children: [
            // {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
        ]
    },
    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [],
        canActivateChild: [],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
        ]
    },
    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [

        ]
    },
    {
        path: 'welcome',
        canActivate: [],
        canActivateChild: [],
        component: LayoutComponent,
        resolve: {
           
        },
        
    },
    // Admin routes
    
];

