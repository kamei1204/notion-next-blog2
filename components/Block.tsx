import React, { FC } from 'react'
import { blockProps } from '../types/type'
import { getText } from '../utils/property'

const Block: FC<blockProps> = ({ block }) => {
    switch (block.type) {
        case "heading_1":
        return <h1>{getText(block.heading_1.rich_text)}</h1>;

        case "heading_2":

        return <h2 className='text-2xl'>{getText(block.heading_2.rich_text)}</h2>;

        case "paragraph":
        return <p>{getText(block.paragraph.rich_text)}</p>;
        
        default :
        console.log(`unknown block type ${block.type}`)
        return<></>
    }
};

export default Block