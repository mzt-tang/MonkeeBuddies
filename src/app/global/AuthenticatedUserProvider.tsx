import {createContext, useState} from "react";
import {User} from "../models";

/**
 * Context hook for detecting whether or a user is logged in.
 */
export const AuthenticatedUserContext = createContext({});

/**
 * Context hook for detecting whether or a user is logged in.
 * @param children
 * @constructor
 */
export const AuthenticatedUserProvider = ({ children }:any) => {
    const [user, setUser] = useState(null);

    return (
        <AuthenticatedUserContext.Provider value={{ user, setUser }}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};