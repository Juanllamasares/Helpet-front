import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pets',
    pathMatch: 'full'
  },
  {
    path: 'pets',
    loadChildren: () => import('./pages/pets/pets.module').then( m => m.PetsPageModule)
  },
  {
    path: 'petshops',
    loadChildren: () => import('./pages/petshops/petshops.module').then( m => m.PetshopsPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/dashboard/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/dashboard/admin/admin.module').then( m => m.AdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
