import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductoSchema } from "./schemas/producto.schema";

@Module({
  imports: [
    //define el schema
    MongooseModule.forFeature([
      {name: 'Producto', schema: ProductoSchema}
  ])
  ],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
