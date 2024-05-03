import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './modules/landing/landing-page/landing-page.component';
import { AcervoComponent } from './modules/garoca-libro/acervo/acervo.component';
import { PaginaInicialComponent } from './modules/garoca-libro/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './modules/garoca-libro/tela-login/tela-login.component';
import { TelaUsuarioComponent } from './modules/garoca-libro/tela-usuario/tela-usuario.component';
import { VitrineLivrosComponent } from './modules/garoca-libro/vitrine-livros/vitrine-livros.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rota padrão redirecionada para '/home'
    { path: 'home', component: LandingPageComponent },
    { path: 'acervo', component: AcervoComponent },
    { path: 'garoca-libro', component: PaginaInicialComponent },
    { path: 'login', component: LoginComponent }, 
    { path: 'tela-usuario', component: TelaUsuarioComponent },
    { path: 'vitrine-livros', component: VitrineLivrosComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
