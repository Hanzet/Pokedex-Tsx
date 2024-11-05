import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
    nombre: string,
    email: string;
    password: string;
    confirmarPassword: string;
    fechaNacimiento: Date;
    pais: string;
    provincia: string;
}

const ReactHookForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-lg shadow-lg p-2">  

            <h4 className="text-center font-bold">Formulario</h4>
            {/* Nombre */}
            <div>
                <label>Nombre</label>
                <input {...register("nombre", { 
                        required: "El nombre es obligatorio",
                        minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" },
                        maxLength: { value: 20, message: "El nombre debe tener como maximo 20 caracteres" },
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: "El nombre debe tener solo letras",
                        }
                    })}
                />
                {errors.nombre && <span>{errors.nombre.message}</span>}
            </div>

            {/* Password */}
            <div>
                <label>Password</label>
                <input type="password" {...register("password", { 
                    required: "La contraseña es obligatoria",
                    minLength: {
                        value: 1,
                        message: "La contraseña debe tener al menos 1 caracteres",
                    },
                    // pattern: {
                    // value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
                    // message: "La contraseña debe tener al menos una mayúscula, una minúscula y un número",
                    // }
                    })} />
                    {errors.password && <span>{errors.password.message}</span>}
            </div>

            {/* ConfirmarContraseña */}
            <div>
                <label>Confirmar Password</label>
                <input type="password" {...register("confirmarPassword", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                        value: 1,
                        message: "La contraseña debe tener al menos 1 caracteres",
                    },
                    validate: (value) => value === watch("password") || "Las contraseñas no coinciden"
                })} />
                {errors.confirmarPassword && <span>{errors.confirmarPassword.message}</span>}
            </div>

            {/* Fecha */}
            <div>
                <label>Fecha</label>
                <input type="date" {...register("fechaNacimiento", { 
                    required: { value: true, 
                        message: "La fecha es obligatoria" },
                    validate: (value) => {
                        const fechaNacimiento = new Date(value);
                        const fechaActual = new Date();
                        const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                        return edad >= 18 || "Debe ser mayor de 18 años"
                    }
                    })}
                />
                {errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}
            </div>

            {/* Pais */}
            <div></div>
                <label>Pais</label>
                <select {...register("pais", { required: "El pais es obligatorio" })}>
                    <option value="">-- Seleccione un pais --</option>
                    <option value="argentina">Argentina</option>
                    <option value="brasil">Brasil</option>
                    <option value="colombia">Colombia</option>
                </select>
                {
                    watch("pais") == "argentina" && (
                        <>
                            <input type="text"
                            placeholder="Provincia"
                            {...register("provincia", {
                                required: {
                                    value: true,
                                    message: "Provincia requerida",
                                },
                            })}>
                            </input>
                                {
                                errors?.provincia && <p>{errors?.provincia?.message}</p>
                            }
                        </>
                    )
                }
                {errors.pais && <span>{errors.pais.message}</span>}

            {/* Email */}
            <div>
                <label>Email</label>
                <input {...register("email", { required: "El email es obligatorio" })} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
        
            <button type="submit">Iniciar sesión</button>
            </div>
        </form>
    );
};

export default ReactHookForm