import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { IResponse } from './interface/IResponse'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, IResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<IResponse<T>> {
    return next.handle()
      .pipe(map(data => ({ data })))
  }
}
