
const formValidates = () => {
    return {
        required: {
            value: true,
            message: "Campo obligatorio"
        },
        patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[_a-z0-9]-)*(\.[a-z]{2, 15})/,
            message: "Email no valido"
        },
        minLength: {
            value: 6,
            message: "La contraseña debe tener al menos 6 caracteres"
        },
        validateTrim: {
            trim: (v) => {
                if (!v.trim()) {
                    return "No debe contener espacios en blanco.";
                }
                return true;
            },
        },
        validateEquals(Value) {
            return {
                equals: v =>
                    v === Value("password") || "Las contraseñas no coinciden"
            };
        },
    }
}


export default formValidates;