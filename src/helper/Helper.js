// Formateo el importe que viene con formato decimal con "." a decimal con ","
export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2).replace('.', ',')}`;
}