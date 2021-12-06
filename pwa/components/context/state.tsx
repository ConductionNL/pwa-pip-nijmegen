import { createContext, useContext } from 'react';
import {base} from "next/dist/build/webpack/config/blocks/base";

const AppContext = createContext(undefined);

export function AppWrapper({ children }) {

  let meUrl;
  let apiUrl;
  let baseUrl;
  let frontendUrl;
  let organization;

  if (typeof window !== 'undefined') {
    if (window.location.href.includes('http://localhost')) {
      meUrl = 'http://localhost/me';
      apiUrl = 'http://localhost/api';
      baseUrl = 'http://localhost';
      frontendUrl = 'http://localhost:3000';
      organization = 'http://webresourcecatalogus.conduction.svc.cluster.local/organizations/b2d3176e-f1c6-4365-ab86-dd253c65fc43';
    } else {
      meUrl = 'https://nijmegen.commonground.nu/api/users/me';
      apiUrl = 'https://nijmegen.commonground.nu/api';
      baseUrl = 'https://nijmegen.commonground.nu';
      frontendUrl = 'https://nijmegen.commonground.nu';
      organization = 'http://webresourcecatalogus.conduction.svc.cluster.local/organizations/b2d3176e-f1c6-4365-ab86-dd253c65fc43';
    }
  }

  console.log(meUrl);

  let sharedState = {
    meUrl: meUrl,
    apiUrl: apiUrl,
    baseUrl: baseUrl,
    frontendUrl: frontendUrl,
    organization: organization,
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
