import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './dummy_products/products.module';
import { TranslationModule } from './translation/translate.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ProductsModule, 
    TranslationModule,
    MongooseModule.forRoot(
      "mongodb+srv://${mongodbuesr}:${mongodbpass}@cluster0.9oua4.mongodb.net/nest-db?retryWrites=true&w=majority"
    ), AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
