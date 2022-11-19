/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
    const [colorSelect, setColorSelect] = useState('black')
    const [xy, setXY] = useState({ x: 6 })
    const [valNum, setvalNum] = useState(String(xy.x))
    const [arrayTable, setArrayTable] = useState([])

    const capColor = ({ target }) => setColorSelect(target.value)

    useEffect(() => {
            setArrayTable(Array(xy.x).fill(4))
    }, [xy])

    const handleColor = (event) => {
        const { target } = event
        const { className } = target
        target.classList.add(colorSelect)
        if (className.split(' ').length >= 1) target.classList.replace(className.split(' ')[1], colorSelect);
        if (className.includes(colorSelect)) target.classList.remove(colorSelect);
    }

    const handleIpt = ({ target }) => setvalNum(target.value)

    const setEscal = () => setXY({ x: Number(valNum) })

    const removeAllcolors = () => {
        const cores = document.querySelectorAll(".colum")
        cores.forEach((e, i) => {
            e.classList.remove(e.classList[1])
        })
    }

    const colorsInfo = useMemo(
        () => ({
            colorSelect,
            xy,
            arrayTable,
            valNum,
            handleColor,
            capColor,
            handleIpt,
            setEscal,
            removeTudo: removeAllcolors,
        }), [arrayTable, colorSelect, valNum, xy])
    return (
        <MyContext.Provider value={colorsInfo}>
            {children}
        </MyContext.Provider>
    );
}

MyProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;