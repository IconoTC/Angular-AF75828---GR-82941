import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginData } from '../../../core/types/user';

@Component({
  selector: 'ind-register',
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="formGroup" (ngSubmit)="handleSubmit()">
      <div class="form-control">
        <label>
          <input type="email" formControlName="email" />
          <span>Correo electrónico</span>
        </label>
      </div>
      @if (formGroup.get('email')?.invalid && formGroup.get('email')?.touched) {
        <div class="error">
          @if (formGroup.get('email')?.errors?.['required']) {
            <small>El correo es obligatorio</small>
          }
          @if (formGroup.get('email')?.errors?.['email']) {
            <small>El correo no es válido</small>
          }
        </div>
      }
      <div class="form-control">
        <label>
          <input type="password" formControlName="passwd" />
          <span>Contraseña</span>
        </label>
      </div>

      <input type="text" name="firstName" formControlName="firstName" />
      <input type="text" name="surname" formControlName="surname" />
      
      <input type="radio" name="gender" formControlName="gender" />

      <select name="country" formControlName="country">
        <option value="">Selecciona un país</option>
        ...
      </select>
      <input type="date" name="birthDateIso" formControlName="birthDateIso" />
      <textarea name="bio" formControlName="bio"></textarea>
      <input type="checkbox" name="termsAcceptance" formControlName="termsAcceptance" />
      <button type="submit" [disabled]="formGroup.invalid">Register</button>
    </form>

    <pre>{{ formGroup.value | json }}</pre>
  `,
  styles: ``,
})
export class Register {
  private fb = inject(FormBuilder);

  protected formGroup = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    passwd: this.fb.nonNullable.control('', Validators.required),
  });

  public formGroupR = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    passwd: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    firstName: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    country: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    bio: [''],
    termsAcceptance: [false, [Validators.requiredTrue]],
    birthDateIso: [''],
  });

  protected handleSubmit() {
    if (this.formGroup.valid) {
      const formValue: LoginData = {
        email: this.formGroup.value.email as string,
        password: this.formGroup.value.passwd as string,
      };

      console.log(formValue);
    }
  }
}
