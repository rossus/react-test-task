import React from 'react';

import {DELTA_MAX} from '../constants';

const Filler = (props) => (
        <div className={"filler of-" + props.parent_align}
             style={{width: `${Math.abs(props.percentage)*100/DELTA_MAX}%`}}/>
);

export default Filler