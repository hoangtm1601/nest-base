import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

@ValidatorConstraint({ name: 'isEqualPasswordField', async: false })
export class PasswordConfirmValidator implements ValidatorConstraintInterface {
  defaultMessage(validationArguments?: ValidationArguments): string {
    return `${validationArguments.property}" should be equal to "${validationArguments.constraints[0]}.`
  }

  validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean {
    return value === validationArguments.object[validationArguments.constraints[0]]
  }
}
