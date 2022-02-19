import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from "@angular/common";

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {PaymentComponent} from './payment/payment.component';
import {RouterModule} from '@angular/router';
import {PaymentCardComponent} from './components/payment-card/payment-card.component';
import {UserCardComponent} from './components/user-card/user-card.component';
import {ButtonComponent} from './components/button/button.component';
import {UserCreationComponent} from './components/user-creation/user-creation.component';
import {PaymentCreationComponent} from './components/payment-creation/payment-creation.component';
import {ControlPanelComponent} from './control-panel/control-panel.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PaymentComponent,
    PaymentCardComponent,
    UserCardComponent,
    ButtonComponent,
    UserCreationComponent,
    PaymentCreationComponent,
    ControlPanelComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
    ]),
    FormsModule
  ],
  providers: [DatePipe,],
  bootstrap: [AppComponent],
})
export class AppModule {
}
