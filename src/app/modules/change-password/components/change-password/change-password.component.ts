import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  public isPasswordVisible = false;
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'newPassword': new FormControl('',
        [Validators.required,
          Validators.minLength(6),
          this.UppercaseValidator(),
          this.DigitsValidator()]),
      'confirmPassword': new FormControl('', [Validators.required])
    })
  }

  public hasNoUppercaseError(): boolean {
    // @ts-ignore
    return this.form.get('newPassword')?.errors?.hasUpperCase;
  }

  public hasNoDigitError(): boolean {
    // @ts-ignore
    return this.form.get('newPassword')?.errors?.hasNumeric;
  }

  public hasMinLengthError(): boolean {
    // @ts-ignore
    return this.form.get('newPassword')?.errors?.minlength;
  }

  public togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible
  }

  public canSubmit(): boolean {
    return !(this.form.get('newPassword')?.errors || (this.form.get('newPassword')?.value !== this.form.get('confirmPassword')?.value))
  }

  public onSubmit() {
    if (this.canSubmit()) {
      alert('You have successfully changed Your Password')
      this.form.reset();
    } else {
      this.form.markAllAsTouched()
    }
  }

  private UppercaseValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);
      return !hasUpperCase ? {hasUpperCase: true} : null;
    }
  }


  private DigitsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const hasNumeric = /\d+/.test(value);
      return !hasNumeric ? {hasNumeric: true} : null;
    }
  }
}

