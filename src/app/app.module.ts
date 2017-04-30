import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from 'app/core/core.module';

// components
import { LayoutComponent } from "app/core/layout/layout.component";


@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        FormsModule,
        CoreModule, // incluir módulo core
        HttpModule
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
