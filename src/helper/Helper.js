// Formateo el importe que viene con formato decimal con "." a decimal con ","
export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2).replace('.', ',')}`;
}

// Éstos son los textos que se muestran en el carrusel del header
export const carouselLabels = [
  "Sean bienvenidos a la drugstore en línea N°1 del país!!",
  "Descubrí productos únicos pensados para vos.",
  "Rápido, seguro y con seguimiento en tiempo real."
]

// Formateo la URL para convertir en minusculas y reemplazar espacios por guiones
export const formatURL = (url) => {
  return url.toLowerCase().replace(/\s+/g, '-');
}

// Funcion de sumar para el contador de productos.
export const sumar = (count, stock) => {
  if (count < stock) {
    return count + 1
  }
  return count
}

// Funcion de restar para el contador de productos.
export const restar = (count) => {
  if (count > 0) {
    return count - 1
  }
  return count
}

// Función para formatear el texto de las categorías. (saco "-" y pongo mayúscula inicial)
export const formatCategoryText = (text) => {
  return text
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}