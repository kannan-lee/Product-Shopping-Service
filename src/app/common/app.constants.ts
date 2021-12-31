export class AppConstants {
    private static API_BASE_URL = "http://localhost:8088/";
    private static OAUTH2_URL = AppConstants.API_BASE_URL + "oauth2/authorization/";
    private static REDIRECT_URL = "?redirect_uri=http://localhost:4200/login";
    public static API_URL = AppConstants.API_BASE_URL + "api/";
    public static GITHUB_AUTH_URL = AppConstants.OAUTH2_URL + "github" + AppConstants.REDIRECT_URL;

//    spring.security.oauth2.client.registration.github.client-id=d70c21bc501ebece97f1
//spring.security.oauth2.client.registration.github.client-secret=d6e1b500f5c66a55c79fdad6b215feb4e2da7d40
}