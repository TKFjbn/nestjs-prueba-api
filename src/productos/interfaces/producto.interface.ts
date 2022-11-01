import { Document } from "mongoose";

export interface Producto extends Document{
    readonly nombre: string;
    readonly descripcion: string;
    readonly imageUrl: string;
    readonly precio: number;
    readonly fechaCreada: Date;
}