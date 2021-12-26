export class GlobalConstants {
    private static API_BASE_URL = "http://localhost:8088/";
    private static OAUTH2_URL = GlobalConstants.API_BASE_URL + "oauth2/authorization/";
    private static REDIRECT_URL = "?redirect_uri=http://localhost:4200/login";
    public static API_URL = GlobalConstants.API_BASE_URL;
    public static GITHUB_TOKEN_ENDPOINT_URL = GlobalConstants.API_BASE_URL+"login/oauth2/code/github"
    public static AUTH_API = GlobalConstants.API_URL + "auth/";
    public static Okta_AUTH_URL = GlobalConstants.OAUTH2_URL + "okta" + GlobalConstants.REDIRECT_URL;
    public static GITHUB_AUTH_URL = GlobalConstants.OAUTH2_URL + "github";
}
