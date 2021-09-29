export const validators = {
    name: (val) => {
        const isValid = val.length > 2;
        return [isValid, isValid ? null : '3 characters min'];
    },
    email: (val) => {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = re.test(String(val).toLowerCase());
        return [isValid, isValid ? null : 'Invalid Email'];
    },
    password: (val) => {
        const isValid = val.length > 5;
        return [isValid, isValid ? null : '6 characters min'];
    },
};
