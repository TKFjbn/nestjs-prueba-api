import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query} from '@nestjs/common';
import { CreateProductoDTO } from "./dto/create-producto.dto";

import { ProductosService } from "./productos.service";


@Controller('productos')
export class ProductosController {

    constructor(private productService: ProductosService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductoDTO: CreateProductoDTO){
        const producto = await this.productService.createProducto(createProductoDTO);
        return res.status(HttpStatus.OK).json({
            message: 'producto creado exitosamente',
            producto
        });
    }

    @Get('/')
    async getProductos(@Res() res) {
        const productos = await this.productService.getProductos();
        return res.status(HttpStatus.OK).json({
            productos 
        });

    }

    @Get('/:productoID')
    async getProducto(@Res() res, @Param('productoID') productoID ){
        const producto = await this.productService.getProducto(productoID);
        if(!producto) throw new NotFoundException('Producto no encontrado');
        return res.status(HttpStatus.OK).json(producto);
    }

    @Delete('/delete')
    async deleteProducto(@Res() res, @Query('productoID') productoID){
        const productoDeleted = await this.productService.deleteProducto(productoID);
        if(!productoDeleted) throw new NotFoundException('Producto no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'producto borrado exitosamente',
            productoDeleted
        });
    }

    @Put('/update')
    async updateProducto(@Res() res, @Body() createProductoDTO: CreateProductoDTO, @Query('productoID') productoID){
        const updateProducto = await this.productService.updateProducto(productoID, createProductoDTO);
        if(!updateProducto) throw new NotFoundException('Producto no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'producto actualizado exitosamente',
            updateProducto
        });

    }

}
