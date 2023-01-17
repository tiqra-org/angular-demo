import { KeycloakService } from "keycloak-angular";

export function useKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'https://iam.tiqra.space',
          realm: 'SampleNg',
          clientId: 'sample-ng-client',
        },
        initOptions: {
          checkLoginIframe: false,
        }
      });
}