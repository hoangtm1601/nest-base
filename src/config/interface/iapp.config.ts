export interface IAppConfig {
  port: number
  bcryptSalt: number
  minPasswordLength: number,
  maxPasswordLength: number,
  apiPrefix: string,
}