import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentOneComponent } from './home-page/component-one/component-one.component';
import { ComponentTwoComponent } from './home-page/component-two/component-two.component';
import { DeepComponentComponent } from './home-page/component-two/deep-component/deep-component.component';
import { LetModule } from '@rx-angular/template/let';
import { PushModule } from '@rx-angular/template/push';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    DeepComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LetModule, 
    PushModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
