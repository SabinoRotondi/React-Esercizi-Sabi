import { useEffect, useRef } from 'react';
export const CarDetails = ({ initialData }) => {
    const modelRef = useRef();
    const colorRef = useRef();
    const yearRef = useRef();
    const ccRef = useRef();
    useEffect(() => {
        modelRef.current.value = initialData.model;
        yearRef.current.value = initialData.year;
        colorRef.current.value = initialData.color;
        ccRef.current.value = initialData.cc;
    }, [initialData]);
    return (
        <form>
            <input ref={modelRef} name="model" />
            <input ref={colorRef} name="color" />
            <input ref={yearRef} type="number" name="year" />
            <input ref={ccRef} type="number" name="cc" />
        </form>
    );
};