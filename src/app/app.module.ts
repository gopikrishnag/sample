import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService} from './auth-service';
import { PriceConfigService } from './Services/price-config.service';

import { PriceConfigComponent } from './price-config/price-config.component';

// const appRoutes: Routes = [
//   {path: '', component: HomeComponent },
//   {path: 'admin', component: AdminComponent },
//  // {path: 'clients', component: ClientsComponent },
//  // {path: 'clients/:id/:name', component: ClientComponent},
//  {path: 'clients', component: ClientsComponent, children: [
//   {path: ':id/:name', component: ClientComponent}
//  ] },
//   {path: 'inputoutput', component: InputOutputComponent},
//   {path: 'admin/PriceConfig', component: InputOutputComponent},
//   {path: '**', component: NotFoundComponent}
// // {path: '**', redirectTo:'/login'}
// ];

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    CockpitComponent,
    InputOutputComponent,
    HomeComponent,
    AdminComponent,
    ClientComponent,
    ClientsComponent,
    NotFoundComponent,
    PriceConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  //  RouterModule.forRoot(appRoutes)
  AppRoutingModule,
  HttpModule
  
  ],
  providers: [ AuthService , AuthGuard, PriceConfigService],
  bootstrap: [AppComponent]
// bootstrap: [ServerElementComponent]
})
export class AppModule { }
function newFunction(): string {
    return ;
}

