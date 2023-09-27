import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MenuOptionComponent } from './shared/buttons/menu-option/menu-option.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MiCuentaComponent,
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    MenuOptionComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],

  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
