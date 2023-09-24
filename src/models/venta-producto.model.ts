import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fkVentaProductoIdProducto: {
        name: 'fkVentaProductoIdProducto',
        entity: 'Producto',
        entityKey: 'id',
        foreignKey: 'productoId',
      },
      fkVentaProductoIdVenta: {
        name: 'fkVentaProductoIdVenta',
        entity: 'Venta',
        entityKey: 'id',
        foreignKey: 'ventaId',
      },
    },
  },
})
export class VentaProducto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  precioUnitario: number;

  @property({
    type: 'number',
  })
  productoId?: number;

  @property({
    type: 'number',
  })
  ventaId?: number;

  constructor(data?: Partial<VentaProducto>) {
    super(data);
  }
}

export interface VentaProductoRelations {
  // describe navigational properties here
}

export type VentaProductoWithRelations = VentaProducto & VentaProductoRelations;
