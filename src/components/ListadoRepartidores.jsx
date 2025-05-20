import React from 'react'

const ListadoRepartidores = () => {
  return (
    <div>ListadoRepartidores</div>
  )
}

const mockRepartidores = [
  { 
    id: 1, 
    nombre: 'Carlos Rodríguez', 
    departamento: 'Caldas', 
    ciudad: 'Manizales', 
    activo: true, 
    pedidosPendientes: 2,
    pedidosHoy: 1,
    telefono: '315-789-4561' 
  },
  { 
    id: 2, 
    nombre: 'Ana Martínez', 
    departamento: 'Caldas', 
    ciudad: 'Manizales', 
    activo: true, 
    pedidosPendientes: 0,
    pedidosHoy: 0,
    telefono: '300-456-7890' 
  },
  { 
    id: 3, 
    nombre: 'José Pérez', 
    departamento: 'Caldas', 
    ciudad: 'Chinchiná', 
    activo: false, 
    pedidosPendientes: 0,
    pedidosHoy: 0,
    telefono: '317-654-3210' 
  },
  { 
    id: 4, 
    nombre: 'María López', 
    departamento: 'Antioquia', 
    ciudad: 'Medellín', 
    activo: true, 
    pedidosPendientes: 1,
    pedidosHoy: 1,
    telefono: '310-123-4567' 
  },
  { 
    id: 5, 
    nombre: 'Pedro Gómez', 
    departamento: 'Cundinamarca', 
    ciudad: 'Bogotá', 
    activo: true, 
    pedidosPendientes: 3,
    pedidosHoy: 2,
    telefono: '321-987-6543' 
  }
];

const mockPedidos = [
  { 
    id: 1, 
    cliente: 'Juan Castro', 
    direccion: 'Calle 10 #15-30', 
    ciudad: 'Manizales', 
    departamento: 'Caldas',
    fechaEntrega: '2025-05-20',
    almacen: {
      id: 101,
      nombre: 'SuperMarket Centro',
      direccion: 'Plaza Principal #33-45',
      telefono: '606-885-4321',
      contacto: 'Martín Soto'
    }
  },
  { 
    id: 2, 
    cliente: 'Laura Díaz', 
    direccion: 'Avenida 5 #20-15', 
    ciudad: 'Manizales', 
    departamento: 'Caldas',
    fechaEntrega: '2025-05-21',
    almacen: {
      id: 102,
      nombre: 'MercadoExpress Chipre',
      direccion: 'Carrera 8 #12-05',
      telefono: '606-887-6543',
      contacto: 'Carmen Valencia'
    }
  },
  { 
    id: 3, 
    cliente: 'Ricardo Álvarez', 
    direccion: 'Carrera 7 #8-12', 
    ciudad: 'Medellín', 
    departamento: 'Antioquia',
    fechaEntrega: '2025-05-20',
    almacen: {
      id: 201,
      nombre: 'SuperTienda El Poblado',
      direccion: 'Calle 10 #43-23',
      telefono: '604-234-5678',
      contacto: 'Juan Restrepo'
    }
  },
  { 
    id: 4, 
    cliente: 'Diana Torres', 
    direccion: 'Calle 45 #23-10', 
    ciudad: 'Bogotá', 
    departamento: 'Cundinamarca',
    fechaEntrega: '2025-05-20',
    almacen: {
      id: 301,
      nombre: 'MegaMarket Chapinero',
      direccion: 'Carrera 13 #63-40',
      telefono: '601-321-7654',
      contacto: 'Patricia Gómez'
    }
  },
  { 
    id: 5, 
    cliente: 'Fernando Gil', 
    direccion: 'Carrera 12 #34-56', 
    ciudad: 'Chinchiná', 
    departamento: 'Caldas',
    fechaEntrega: '2025-05-22',
    almacen: {
      id: 103,
      nombre: 'MiniMarket La Estación',
      direccion: 'Avenida Ferrocarril #12-30',
      telefono: '606-850-1234',
      contacto: 'Roberto Sánchez'
    }
  }
];

const ubicacionesOptions = [
  {
    value: 'Caldas',
    label: 'Caldas',
    children: [
      {
        value: 'Manizales',
        label: 'Manizales',
      },
      {
        value: 'Chinchiná',
        label: 'Chinchiná',
      }
    ],
  },
  {
    value: 'Antioquia',
    label: 'Antioquia',
    children: [
      {
        value: 'Medellín',
        label: 'Medellín',
      }
    ],
  },
  {
    value: 'Cundinamarca',
    label: 'Cundinamarca',
    children: [
      {
        value: 'Bogotá',
        label: 'Bogotá',
      }
    ],
  }
];

export default ListadoRepartidores

