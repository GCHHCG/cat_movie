import React, { useState } from "react";
import {Input} from 'antd'
import { useEffect } from "react";
const TodoInput = ({placeholder,onSetQuery}) => {
    const [value, setValue] = useState("")
    const onAdd = () => {
        // console.log('......')
        onSetQuery(value);
    }
    useEffect(()=> {
        setValue(value)
    },[value])
    return (
        <>
        <section className="input-wrap">
            <Input className="Input"
            onPressEnter={onAdd}
            placeholder = {placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
            />
        </section>
        </>
    )
}
export default TodoInput