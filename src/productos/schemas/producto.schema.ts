import { Schema } from "mongoose";

export const ProductoSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: String,
    imageUrl: String,
    precio: Number,
    fechaCreada: {
        type: Date,
        default: Date.now
    }
});