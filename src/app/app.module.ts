// External Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
// Internal Modules
import { DesignModule } from './modules/design.module';
import { AuthModule } from './auth/auth.module';

import { CoreModule } from 'tft-core';


// Routing
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { UserProfileModule } from './user-profile/user-profile.module';
// App Components
import { AppComponent } from './app.component';
// Store
import { Store } from './store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DesignModule,
    CoreModule,
    HomeModule,
    AuthModule,
    UserProfileModule,
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
