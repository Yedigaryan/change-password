import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordWrapperComponent } from './components/change-password-wrapper/change-password-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePasswordRoutingModule {}
