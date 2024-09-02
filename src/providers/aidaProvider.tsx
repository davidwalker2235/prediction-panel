import React, {createContext, ReactNode} from 'react';

type credentialsTypes = {
    endPoint: string;
    azureApiKey: string;
    deploymentId: string;
};

type AidaProviderProps = {
    children: ReactNode;
    credentials: credentialsTypes;
};

export const ChatContext = createContext<credentialsTypes>({
    endPoint: '', azureApiKey: '', deploymentId: ''
});

const AidaProvider: React.FC<AidaProviderProps> = ({children, credentials}) => {

    return (
        <ChatContext.Provider value={credentials}>
            {children}
        </ChatContext.Provider>
    );
}

export default AidaProvider