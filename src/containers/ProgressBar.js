import React from 'react';
import {Filler} from '.';

const ProgressBar = (props) => (
        <div className={"progress-bar " + props.align}>
            {props.align !== 'empty' ? <Filler percentage={props.percentage} parent_align={props.align}/> : null}
        </div>
);

export default ProgressBar