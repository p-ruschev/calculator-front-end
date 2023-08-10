import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmPassword(control: string): ValidatorFn {
    return (matchingControl: AbstractControl): ValidationErrors | null => {
        const password = matchingControl.root.get(control)?.value;
        const rePassword = matchingControl.value;
        const match = password === rePassword;

        return !match && rePassword ? { confirmPassword: true } : null;
    }
}