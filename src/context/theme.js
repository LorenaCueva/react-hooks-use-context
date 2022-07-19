import react, {useState} from "react";

const ThemeContext = react.createContext();

function ThemeProvider({children}){

    const [theme, setTheme] = useState("dark");

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};