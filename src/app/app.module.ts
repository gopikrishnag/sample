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
import { PriceConfigService, AlertService, AuthenticationService, UserService } from './services/index';

import { PriceConfigComponent } from './price-config/price-config.component';
import { IcDatepickerModule } from 'ic-datepicker';
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomOption } from './custom-option';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



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
    PriceConfigComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    FormsModule,
  //  RouterModule.forRoot(appRoutes)
  AppRoutingModule,
  IcDatepickerModule,
  HttpModule

  ],
  providers: [ AuthService ,
              AuthGuard,
              PriceConfigService,
              AlertService,
              AuthenticationService,
              UserService,
              //ToastOptions,
              {provide: ToastOptions, useClass: CustomOption}],
  bootstrap: [AppComponent]
// bootstrap: [ServerElementComponent]
})
export class AppModule { }
function newFunction(): string {
    return ;
}

