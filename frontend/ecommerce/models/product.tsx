import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    name: {type: String, require: true},
    preco: {type: Number, require: true},
    quantidade: {type: String, require: true},
    descricao: String,
    marca: {type: String, require: true},
    categoria: {type: mongoose.Types.ObjectId, ref:'Category', require: true},
    dimenssao: String,
    unidadeMedida: String,
    material: String,
    peso: {type: Number, require: true},
    data: String,
    hora: String,
    images: [{type: String}]
}, {
    timestamps: true
})

export const Product = models.Product || model('Product', ProductSchema)