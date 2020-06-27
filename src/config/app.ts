import { IAppConfig } from './interface/IAppConfig'

export default (): IAppConfig => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  bcryptSalt: parseInt(process.env.BCRYPT_SALT, 10) || 10,
})
