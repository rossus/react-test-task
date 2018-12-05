import React from 'react';

const SortableBody = ({content}) => {
    return(
        <tbody>
        {content.map((element, index) =>
            <tr key={index}>
                {element.map((item, i) => {
                    if(i === element.length - 1) {
                        return(
                            <td key={i-1}>{item}</td>
                        )
                    } else if(i === element.length - 2) {
                        return(
                            <td key={item}></td>
                        )
                    } else {
                    return(
                    <td key={i}>{item}</td>
                    )}
                })}
            </tr>
        )}
        </tbody>
    )
};

export default SortableBody