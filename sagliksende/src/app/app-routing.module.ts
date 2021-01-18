import { LoginComponent } from './components/login/login.component';
import { AdminpaneliComponent, } from './components/adminpaneli/adminpaneli.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { covid19bilgilendirmeComponent } from './components/covid19bilgilendirme/covid19bilgilendirme.component';
import { saglikmalzemeleriComponent } from './components/saglikmalzemeleri/saglikmalzemeleri.component';
import { UyeloginComponent } from './components/uyelogin/uyelogin.component';
import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';
import { BizeulasinComponent } from './components/bizeulasin/bizeulasin.component';
import { NasilkorunuruzComponent } from './components/nasilkorunuruz/nasilkorunuruz.component';



const redirectLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [

  {
    path: '',
    component:
      AnasayfaComponent,

  }
  ,
  { path: 'login', component: LoginComponent },
  { path: 'kayitlar', component: KayitlarComponent },
  { path: 'covid19bilgilendirme', component: covid19bilgilendirmeComponent },
  { path: 'bizeulasin', component: BizeulasinComponent  },
  { path: 'saglikmalzemeleri', component: saglikmalzemeleriComponent },
  { path: 'adminpaneli', component: AdminpaneliComponent ,canActivate: [AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  }},
  { path: 'uyelogin', component: UyeloginComponent },
  { path: 'uyeregister', component: UyeregisterComponent },
  { path: 'nasilkorunuruz', component: NasilkorunuruzComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
