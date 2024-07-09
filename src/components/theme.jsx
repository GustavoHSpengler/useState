import React, {useState, createContext, useContext} from "react";

function BackgroundTheme () {
    let Theme = createContext(null);

    function AlterTheme (){
        let [theme, setAlterTheme] = useState("light")
    
        return (
            <>
                <Theme.Provider value={theme}>
                    <label>
                        <input 
                            type="checkbox"
                            checked={theme === "dark"} 
                            onChange={(e) => {
                                setAlterTheme(e.checked ? "dark" : "light")
                            }}
                        />
                        Troque para o tema escurso.
                    </label>
                </Theme.Provider>
            </>
        )
    }
}

export default BackgroundTheme;