import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatListModule } from "@angular/material/list";
import { ToolCardComponent } from "./pages/home/components/tool-card/tool-card.component";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { VuttrApiService } from "./services/vuttr-api.service";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { AddDialogComponent } from "./pages/home/components/add-dialog/add-dialog.component";
import { TagComponent } from './pages/home/components/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ToolCardComponent,
    AddDialogComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    ScrollingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  entryComponents: [AddDialogComponent],
  providers: [VuttrApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
