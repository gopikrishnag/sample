
import { NgModule, } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PriceConfigComponent } from './price-config/price-config.component';
import { LoginComponent} from './login/index';
import { RegisterComponent } from './register/index';
// import { AppComponent } from './app.component';

import { ServerElementComponent } from './server-element/server-element.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { AuthGuard } from './auth-guard.service';
import { PriceConfigService, AlertService, AuthenticationService, UserService } from './services/index';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'admin', component: AdminComponent },
   // {path: 'clients', component: ClientsComponent },
   // {path: 'clients/:id/:name', component: ClientComponent},
   {path: 'clients',
    // canActivate: [AuthGuard] ,
    canActivateChild: [AuthGuard],
    component: ClientsComponent, children: [
    {path: ':id/:name', component: ClientComponent}
   ] },
    {path: 'inputoutput', component: InputOutputComponent},
    {path: 'admin/PriceConfig', component: PriceConfigComponent},
    {path: 'admin/DeliveryManagment', component: InputOutputComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotFoundComponent}
  // {path: '**', redirectTo:'/login'}
  ];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
