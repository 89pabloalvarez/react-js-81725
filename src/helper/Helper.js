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