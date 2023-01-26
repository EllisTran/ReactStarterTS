import { useState } from 'react';
import { ItemProp } from '../pages/AccordionPage';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import React from 'react';
interface AccordionProps {
    items: ItemProp[];
}
const Accordion = ({ items }: AccordionProps): JSX.Element => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index: number) => {
        // If we need to do conditional useState
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === index) {
                return -1;
            }
            return index;
        });
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = (
            <span className="text-2xl">
                {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
        );
        return (
            <div key={item.id}>
                <div
                    className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
                    onClick={() => handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && (
                    <div className="border-b p-5">{item.content}</div>
                )}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
