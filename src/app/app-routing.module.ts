import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSystemComponent } from './modules/core/contact-system/contact-system.component';
import { LoginComponent } from './modules/core/login/login.component';

const routes: Routes = [

  {
    path: "",
    children: [
      {
        path: "contact",
        loadChildren: () => import("./modules/feature/contact/contact.module").then(m => m.ContactModule),
      
      },
     
    ],
    // canActivate: [AuthenticationGuard],
    // canActivateChild: [AuthenticationGuard],
    component: ContactSystemComponent,
  },

  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
