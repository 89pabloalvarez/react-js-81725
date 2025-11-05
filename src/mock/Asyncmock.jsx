const productos = [
  {
    id: '01',
    nombre: 'Sugus',
    precio: 5.99,
    categoria: 'Caramelos',
    img: '',
    descripcion: 'Un caramelo muy copado.',
    stock: 50
  },
  {
    id: '02',
    nombre: 'Flynn Paff',
    precio: 6.49,
    categoria: 'Caramelos',
    img: '',
    descripcion: 'Caramelo masticable con sabor frutal.',
    stock: 40
  },
  {
    id: '03',
    nombre: 'Guaymallén Negro',
    precio: 7.99,
    categoria: 'Alfajores',
    img: '',
    descripcion: 'Alfajor clásico de chocolate.',
    stock: 60
  },
  {
    id: '04',
    nombre: 'Guaymallén Blanco',
    precio: 7.99,
    categoria: 'Alfajores',
    img: '',
    descripcion: 'Alfajor clásico de chocolate blanco.',
    stock: 60
  },
  {
    id: '05',
    nombre: 'Jorgito Negro',
    precio: 8.49,
    categoria: 'Alfajores',
    img: '',
    descripcion: 'Alfajor relleno con dulce de leche.',
    stock: 50
  },
  {
    id: '06',
    nombre: 'Jorgito Blanco',
    precio: 8.49,
    categoria: 'Alfajores',
    img: '',
    descripcion: 'Alfajor con cobertura de chocolate blanco.',
    stock: 50
  },
  {
    id: '07',
    nombre: 'Jorgito Negro (pack x6)',
    precio: 45.00,
    categoria: 'Alfajores',
    img: '',
    descripcion: 'Pack de 6 alfajores Jorgito negro.',
    stock: 20
  },
  {
    id: '08',
    nombre: 'Rasta Blanco',
    precio: 9.49,
    categoria: 'Alfajores',
    img: '',
    descripcion: 'Alfajor con cobertura blanca y relleno intenso.',
    stock: 40
  },
  {
    id: '09',
    nombre: 'Rasta Negro',
    precio: 9.49,
    categoria: 'Alfajores',
    img: '',
    descripcion: 'Alfajor con cobertura negra y sabor intenso.',
    stock: 40
  },
  {
    id: '10',
    nombre: 'Don Satur Bizcocho Dulce',
    precio: 12.99,
    categoria: 'Galletitas',
    img: '',
    descripcion: 'Bizcochos dulces ideales para el mate.',
    stock: 30
  },
  {
    id: '11',
    nombre: 'Don Satur Bizcocho Negrito',
    precio: 12.99,
    categoria: 'Galletitas',
    img: '',
    descripcion: 'Bizcochos con sabor tostado.',
    stock: 30
  },
  {
    id: '12',
    nombre: 'Don Satur Bizcocho Salado',
    precio: 12.99,
    categoria: 'Galletitas',
    img: '',
    descripcion: 'Bizcochos salados para picar.',
    stock: 30
  },
  {
    id: '13',
    nombre: 'Don Satur Magdalena Chocolate con Dulce de Leche',
    precio: 15.99,
    categoria: 'Galletitas',
    img: '',
    descripcion: 'Magdalena rellena con dulce de leche.',
    stock: 25
  },
  {
    id: '14',
    nombre: 'Don Satur Magdalena Vainilla con Dulce de Leche',
    precio: 15.99,
    categoria: 'Galletitas',
    img: '',
    descripcion: 'Magdalena sabor vainilla rellena.',
    stock: 25
  },
  {
    id: '15',
    nombre: 'Oreo',
    precio: 10.99,
    categoria: 'Galletitas',
    img: '',
    descripcion: 'Galletitas rellenas con crema.',
    stock: 50
  },
  {
    id: '16',
    nombre: 'Oreo Golden',
    precio: 10.99,
    categoria: 'Galletitas',
    img: '',
    descripcion: 'Versión dorada de las clásicas Oreo.',
    stock: 50
  },
  {
    id: '17',
    nombre: 'Oreo (pack x3)',
    precio: 29.99,
    categoria: 'Galletitas',
    img: '',
    descripcion: 'Pack de 3 Oreo clásicas.',
    stock: 20
  },
  {
    id: '18',
    nombre: 'Oreo Golden (pack x3)',
    precio: 29.99,
    categoria: 'Galletitas',
    img: '',
    descripcion: 'Pack de 3 Oreo doradas.',
    stock: 20
  },
  {
    id: '19',
    nombre: 'Pepitos',
    precio: 9.99,
    categoria: 'Galletitas',
    img: '',
    descripcion: 'Galletitas con chips de chocolate.',
    stock: 40
  },
  {
    id: '20',
    nombre: 'Pepitos (pack x3)',
    precio: 27.99,
    categoria: 'Galletitas',
    img: '',
    descripcion: 'Pack de 3 Pepitos.',
    stock: 20
  }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}