import { Global, Module } from '@nestjs/common'
import { PasswordConfirmValidator } from './password-confirm.validator'
import { UniqueEmailValidator } from './unique-email.validator'
import { UserHttpModule } from '../users/user-http.module'

@Global()
@Module({
  imports: [
    UserHttpModule,
  ],
  providers: [
    PasswordConfirmValidator,
    UniqueEmailValidator,
  ],
  exports: [
    PasswordConfirmValidator,
    UniqueEmailValidator,
  ],
})
export class ValidatorModule {
}
