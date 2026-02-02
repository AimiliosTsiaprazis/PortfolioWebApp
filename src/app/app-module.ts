import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import {Home} from './pages/home/home';
import {Footer} from './shared/footer/footer';
import {CommonModule} from '@angular/common';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { AppLayout } from './layout/app-layout/app-layout';
import { Login } from './login/login/login';

@NgModule({
  declarations: [
    App,
    Navbar,
    About,
    Projects,
    Contact,
    AppLayout,
    Login
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    Home,
    Footer
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
