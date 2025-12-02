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

// Función para sacar los guiones y reemplazarlos por espacios.
export const replaceHyphensWithSpaces = (text) => {
  return text.replace(/-/g, ' ')
}

// Inverso a lo anterior, función para sacar los espacios y reemplazarlos por guiones.
export const replaceSpacesWithHyphens = (text) => {
  return text.replace(/ /g, '-')
}

// Función para poner en mayúscula la primera letra de cada palabra.
export const capitalizeWords = (text) => {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const formatCategoryText = (text) => {
  return capitalizeWords(replaceHyphensWithSpaces(text))
}