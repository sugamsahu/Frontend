import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import('src/app/Modules/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: "about-us", loadChildren: () => import('src/app/Modules/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: "contact-us", loadChildren: () => import('src/app/Modules/contact-us/contact-us.module').then(m => m.ContactUsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
