import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { ResponseTransformInterceptor } from './interceptors/response.transform.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalInterceptors(new ResponseTransformInterceptor())
  const configService = app.get(ConfigService)
  const port = configService.get<number>('port')
  await app.listen(port)
}

bootstrap()
