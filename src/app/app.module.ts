import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Router
import { routes } from './app.router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { AboutComponent } from './components/about/about.component';

// Directives
import { LocationDirective } from './directives/location.directive';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent,
        AboutComponent,
        LocationDirective
    ],
        imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
