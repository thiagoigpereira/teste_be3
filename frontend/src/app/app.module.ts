import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateComponent } from './pages/create/create.component';
import { CPFPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [
    CPFPipe,
    AppComponent,
    HomeComponent,
    DetailsComponent,
    HeaderComponent,
    CreateComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
