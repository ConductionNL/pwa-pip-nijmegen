import { createContext, useContext } from 'react';

const AppContext = createContext(undefined);

export function AppWrapper({ children }) {

  let sharedState = {
    meUrl: 'http://localhost/me',
    apiUrl: 'http://localhost/api',
    baseUrl: 'http://localhost',
    frontendUrl: 'http://localhost:3000',
    organization: 'http://webresourcecatalogus.conduction.svc.cluster.local/organizations/b2d3176e-f1c6-4365-ab86-dd253c65fc43',
    brpUrl: 'http://brpservice.waardepapieren.svc.cluster.local',
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
