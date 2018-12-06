import React from 'react';
import {ProgressBar} from '../containers';

const SortableBody = ({content}) => {
    return(
        <tbody>
        {content.map((element, index) =>
            <tr className={"order"+index%2} key={index}>
                {element.map((item, i) => {
                    if(i === element.length - 1) {
                        return(
                            <td className="course" key={i}>{(item>0 ? '+' : '') + item.toFixed(2) + ' п.п.'}</td>
                        )
                    } else if(i === element.length - 2) {
                        return(
                            <td key={i}>
                                {element[element.length - 1] > 0 ? <ProgressBar align="empty"/> :
                                    <ProgressBar align="right" percentage={element[element.length - 1]}/>}
                            </td>
                        )
                    } else {
                    return(
                    <td key={i}>{item}</td>
                    )}
                })}
                <td key={element.length}>
                    {element[element.length - 1] < 0 ? <ProgressBar align="empty"/> :
                        <ProgressBar align="left" percentage={element[element.length - 1]}/>}
                </td>
            </tr>
        )}
        </tbody>
    )
};

export default SortableBody