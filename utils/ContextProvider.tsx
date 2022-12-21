import React from 'react'
import { IUser } from './models'


interface IStateContextProps {
    user: IUser | null
    token: string | null
    setToken: (token: any) => void
    setUser: (user: any) => void
}

export const StateContext = React.createContext<IStateContextProps>({} as IStateContextProps);

export const StateContextProvider = ( { children } : { children: React.ReactNode } ) => {
    const [user, setUser] = React.useState(null);
    // const [token, _setToken] = React.useState(localStorage.getItem('ACCESS_TOKEN'));
    const [token, _setToken] = React.useState(null);

    React.useEffect(() => {
        setUser({
            name: 'nimp',
            shortFio: 'Максим П. Нестеров',
            email: 'nimpweb@yandex.ru'
        })
    
    }, [])

    const setToken = (value) => {
        _setToken(value);
        if (value) {
            localStorage.setItem('ACCESS_TOKEN', value);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider  value={{ user, token, setToken, setUser }}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => React.useContext(StateContext);