import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrestoComponent } from './addresto/addresto.component';
import { HomeComponent } from './home/home.component';
import { ListrestoComponent } from './listresto/listresto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdaterestoComponent } from './updateresto/updateresto.component';

const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent,
    //data:{ title:'Blog Home'}
  },
  {
    path:'Add',
    component:AddrestoComponent,
    //data:{ title:'Blog Home'}
  },
  {
    path:'Update/:id',
    component:UpdaterestoComponent,

   // data:{ title:'Blog Home'}
  },
  {
    path:'Login',
    component:LoginComponent,
   // data:{ title:'Blog Home'}
  },
  {
    path:'Register',
    component:RegisterComponent,
   // data:{ title:'Blog Home'}
  },
  {
    path:'List',
    component:ListrestoComponent,
    //data:{ title:'Blog Home'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
