import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {  //controllers, rutas servidor
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return "Hola mundo"
  }
}
