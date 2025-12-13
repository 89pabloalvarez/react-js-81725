import { useForm } from "react-hook-form"
import '../../../App.css'

const CheckoutForm = ({ onSubmit, process }) => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  return (
    <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="form-control"
        type="text"
        placeholder="Ingrese su Nombre"
        {...register("name", { required: true, minLength: 3 })}
      />
      {errors?.name?.type === 'required' && <span>Por favor complete el campo 'Nombre'.</span>}
      {errors?.name?.type === 'minLength' && <span>El campo 'Nombre' debe contener al menos 3 caracteres.</span>}
      <input
        className="form-control"
        type="text"
        placeholder="Ingrese su Apellido"
        {...register("lastName", { required: true, minLength: 3, maxLength: 40 })}
      />
      {errors?.lastName?.type === 'required' && <span>Por favor complete el campo 'Apellido'.</span>}
      {errors?.lastName?.type === 'minLength' && <span>El campo 'Apellido' debe contener al menos 3 caracteres.</span>}
      {errors?.lastName?.type === 'maxLength' && <span>El campo 'Apellido' es demasiado largo.</span>}
      <input
        className="form-control"
        type="email"
        placeholder="Ingrese su e-Mail"
        {...register("email", { required: true })}
      />
      {errors?.email?.type === 'required' && <span>Por favor complete su Correo Electrónico.</span>}

      <input
        className="form-control"
        type="email"
        placeholder="Repita su correo"
        {...register("repeatEmail", {
          required: true,
          validate: { equalsMails: mail2 => mail2 === getValues().email }
        })}
      />
      {errors?.repeatEmail?.type === 'required' && <span>Por favor vuelva a ingresar su Correo Electrónico.</span>}
      {errors?.repeatEmail?.type === 'equalsMails' && <span>Los correos ingresados no coinciden.</span>}
        <button
            type="submit"
            className="btn btn-success"
            disabled={process}
        >
            {process ? "Procesando Orden..." : "PROCESAR ORDEN"}
        </button>
    </form>
  )
}

export default CheckoutForm
