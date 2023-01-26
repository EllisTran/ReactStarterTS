import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { DropdownOption } from '../pages/DropdownPage';
import Panel from './Panel';

interface DropdownProps {
    options: DropdownOption[];
    value: DropdownOption | null;
    onChange: (option: DropdownOption) => void;
}

const Dropdown = ({ options, value, onChange }: DropdownProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!divEl.current) return;

            if (!divEl.current.contains(target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOnSelect = (option: DropdownOption) => {
        onChange(option);
        handleClick();
    };

    const renderedOptions = options.map((item) => {
        return (
            <div
                className="hover:bg-sky-100 rounder cursor-pointer p-1"
                key={item.id}
                onClick={() => handleOnSelect(item)}
            >
                {item.label} {item.value}
            </div>
        );
    });
    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                onClick={handleClick}
                className="flex justify-between items-center cursor-pointer"
            >
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>
            <div>
                {isOpen && (
                    <Panel className="absolute top-full">
                        {renderedOptions}
                    </Panel>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
