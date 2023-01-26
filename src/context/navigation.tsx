import { createContext, useState, useEffect } from 'react';
import React from 'react';
interface NavigationContextType {
    navigate: (to: string) => void;
    currentPath: string;
}

interface Props {
    children: React.ReactNode;
}

const NavigationProvider = ({ children }: Props) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);
        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    const navigate = (to: string) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    const value = { currentPath, navigate };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};
const NavigationContext = createContext<NavigationContextType | null>(null);
export { NavigationProvider };
export default NavigationContext;
