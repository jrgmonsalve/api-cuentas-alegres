import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello CI/CD prueba de actualizacion2.';
  }
}
