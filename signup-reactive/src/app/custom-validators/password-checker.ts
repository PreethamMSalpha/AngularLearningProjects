import { FormGroup } from '@angular/forms';

// export function PasswordChecker(
//   controlName: string,
//   CompareControlName: string
// ) {
//     return (formGroup: FormGroup) => {

//     }
// }

export const PasswordChecker =
  (controlName: string, CompareControlName: string) =>
  (formGroup: FormGroup) => {
    const password = formGroup.controls[controlName];
    const confirmPassword = formGroup.controls[CompareControlName];

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mustMatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
  };
