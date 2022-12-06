import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordWrapperComponent } from './components/change-password-wrapper/change-password-wrapper.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [ChangePasswordWrapperComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class ChangePasswordModule {
}
