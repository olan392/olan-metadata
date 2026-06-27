class ThemeError extends Error{
    constructor(message){
        super(message);
        this.name = "ThemeError";
    }
}

export let theme = Object.freeze({
    light: 'light',
    dark: 'dark',
    system: 'system'
});

export class Theme{
    constructor(themeName){
        if (!(themeName in theme)){
            throw new ThemeError(`Theme Doesnt Exist: ${themeName}`);
        }
        else{
            this.theme = themeName;
        }
    }

    get(){
        return this.theme;
    }

    apply(themeName){
        if (!(themeName in theme)){
            throw new ThemeError(`Theme Doesnt Exist: ${themeName}`);
        }
        else{
            this.theme = themeName;
        }
    }
}

export class Name{
    constructor(name){
        this.name = name
    }
    get(){
        return this.name
    }
}

export class Metadata{
    constructor(themeObject, nameObject){
        this.theme = themeObject
        this.name = nameObject
    }
    getTheme(){
        return this.theme.get()
    }
    getName(){
        return this.name.get()
    }
}
