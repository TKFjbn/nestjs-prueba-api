export class CreateProductoDTO{
    readonly nombre: string;
    readonly descripcion: string;
    readonly imageUrl: string;
    readonly precio: number;
    readonly fechaCreada: Date;
}