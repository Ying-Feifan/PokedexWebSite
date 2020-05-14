import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { AngularMaterialModule } from './angular-material.module';

// two way data binding
import { FormsModule } from '@angular/forms';

// HttpClient
import { HttpClientModule } from '@angular/common/http';
import { FeedbackComponent } from './feedback/feedback.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
