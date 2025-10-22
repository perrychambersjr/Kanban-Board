import { createContext, ReactNode, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const html = document.documentElement;
    
    if (storedTheme === "dark") {
        html.classList.add("dark");
        html.classList.remove("light");
    } else {
        html.classList.remove("dark");
        html.classList.add("light");
    }
    }, []);

    const toggleTheme = () => {
    setTheme(prev => {
        const next = prev === "light" ? "dark" : "light";
        if (next === "dark") {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", next);
        return next;
    });
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}