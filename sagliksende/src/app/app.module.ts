import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';
import { AdminpaneliComponent, } from './components/adminpaneli/adminpaneli.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';


import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';
import { BizeulasinComponent } from './components/bizeulasin/bizeulasin.component';
import { covid19bilgilendirmeComponent } from './components/covid19bilgilendirme/covid19bilgilendirme.component';
import { saglikmalzemeleriComponent } from './components/saglikmalzemeleri/saglikmalzemeleri.component';
import { NasilkorunuruzkayitComponent } from './components/nasilkorunuruzkayit/nasilkorunuruzkayit.component';
import { NasilkorunuruzComponent } from './components/nasilkorunuruz/nasilkorunuruz.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminpaneliComponent,
    LoginComponent,
    KayitlarComponent,
    AnasayfaComponent,
    saglikmalzemeleriComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    BizeulasinComponent,
    covid19bilgilendirmeComponent,
    FooterComponent,
    UyeloginComponent,
    UyeregisterComponent,
    NasilkorunuruzkayitComponent,
    NasilkorunuruzComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
