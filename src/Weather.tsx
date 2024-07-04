// @flow
import * as React from 'react';

type Props = {
    temp: number
    description: string
};

export const Weather = (props: Props) => {
    return (
        <div className="weather">
            <p>Temperature: {props.temp} °C</p>
            <p>Weather: {props.description}</p>
        </div>
    );
};