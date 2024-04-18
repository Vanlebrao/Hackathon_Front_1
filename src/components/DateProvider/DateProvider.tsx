import React, { useCallback, useEffect, useState, useContext, createContext } from 'react';

const DateContext = createContext({});

export const DateProvider = ({ children }) => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [dayWeek, setDayWeek] = useState('');
    const [day, setDay] = useState(0);
    const [year, setYear] = useState(0);
    const [month, setMonth] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            getHour();
            getDate();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); 

    const getHour = useCallback(() => {
        const date = new Date();
        const minuto = date.getMinutes();
        const hora = date.getHours(); // Considerando um fuso horário específico

        setHour(hora);
        setMinute(minuto);
    }, []);

    const getDate = useCallback(() => {
        const date = new Date();
        const diaSemanaNumero = date.getDay();
        const yearNow = date.getFullYear();
        const dayNow = date.getUTCDate();

        const monthCurrent = date.getMonth();
        const mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        const monthNow = mesesAno[monthCurrent];

        const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const dayWeekNow = diasSemana[diaSemanaNumero];

        setDay(dayNow);
        setYear(yearNow);
        setDayWeek(dayWeekNow);
        setMonth(monthNow);
    }, []);

    return (
        <DateContext.Provider value={{ hour, minute, dayWeek, day, year, month }}>
            {children}
        </DateContext.Provider>
    );
};

export const useDate = () => useContext(DateContext);
