import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
