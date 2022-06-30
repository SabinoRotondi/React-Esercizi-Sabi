export const useForm = () => {
    const [form, setForm] = {
        username: '',
        password: '',
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => {
            return { ...prevState, [name]: value, }
        });
    };
    return {
        form,
        onInputChange: handleInputChange,
    };
};