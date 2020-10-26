import React from "react";
import {Slider} from "@material-ui/core";
import style from "./CommonSlider.module.css"
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        width: "100%",
        color: "black",
    }
});

type Slider2Type = {
    value: number[]
    setValue:(newValue:number[]) => void
    min: number
    max: number
}

export const CommonSlider = React.memo((props: Slider2Type) => {

    const classes = useStyles();

    const handleChange = (event: any, newValue: number | number[]) => {
        props.setValue(newValue as number[]);
    };

    return <div className={style.container}>
        <div className={style.value}>
            <span>{props.value[0]}</span>
            <span>{props.value[1]}</span>
        </div>
        <Slider
            className={classes.root}
            min={props.min}
            max={props.max}
            value={props.value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
        />
    </div>
})