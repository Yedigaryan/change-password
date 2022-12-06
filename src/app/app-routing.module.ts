import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  {
    path: 'change-password',
    loadChildren: () =>
      import('./modules/change-password/change-password.module').then(
        (m) => m.ChangePasswordModule
      ),
    canActivate: [AppGuard],
  },
  { path: '', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
