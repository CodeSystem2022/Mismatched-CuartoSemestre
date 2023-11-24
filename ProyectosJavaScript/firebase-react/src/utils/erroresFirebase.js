export const erroresFirebase = (code) => {
    switch (code) {
        case 'auth/invalid-email':
            return {
                code: "email",
                message: 'El correo electronico no es valido.'
            };

        case 'auth/user-disabled':
            return {
                code: "email",
                message: 'El correo electronico no es valido.'
            };

        case 'auth/user-not-found':
            return {
                code: "email",
                message: 'El usuario no existe.'
            };

        case 'auth/wrong-password':
            return {
                code: "password",
                message: 'La contraseña no es valida.'
            };

        default:
            return {
                code: "email",
                message: 'Error del servidor. Intente mas tarde.'
            };
    }
}