import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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

  protected handleSubmit() {
    if (this.formGroup.valid) {
      const formValue = this.formGroup.value;
      console.log(formValue);
    }
  }
}
