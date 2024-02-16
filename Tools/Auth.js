const MCPEDLUtilities = require("../MCPEDLUtilities");
const axios = require('axios').default;
/**
 * @typedef {Object} User
 * @property {string} username
 * @property {string} user_nicename
 * @property {string?} display_name
 * @property {string} email
 * @property {number} role
 * @property {string?} avatar
 * @property {string} twitter
 * @property {string} youtube
 * @property {string} facebook
 * @property {string} instagram
 * @property {string} discord
 * @property {number?} curseforge_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string?} user_registered
 * @property {Object?} settings
 * @property {string} user_data
 * @property {boolean} has_popular_submission
 * @property {boolean} allowed_comment
 * @property {boolean} is_email_valid
 * @property {boolean} email_verified
 * @property {boolean} notifications_status
 */
/**
 * @typedef {Object} RegisterResponse
 * @property {User} data
 */
/**
 * @typedef {Object} LoginResponse
 * @property {string?} status
 * @property {string?} message
 * @property {User?} user
 * @property {string?} access_token
 * @property {string?} token_type
 * @property {number?} expires_in
 */
class Auth extends MCPEDLUtilities {
    constructor() {
        super();
        this.baseEndpoint = "https://api.mcpedl.com";
        this.loginEndpoint = "/api/auth/login";
        this.registerEndpoint = "/api/auth/register";
        this.getUserByTokenEndpoint = "/api/auth/user";

    }
    /**
     * @description Logs into an MCPEDL account
     * @param {string} identifier 
     * @param {string} password 
     * @returns {Promise<LoginResponse>}
     * @throws
     */
    async login(identifier, password) {
        let response = await axios.post(`${this.baseEndpoint}${this.loginEndpoint}`, {
            identifier,
            password
        }, {
            headers: {
                "User-Agent": this.userAgent
            },
        })
        return response.data;
    }
    /**
     * @description Registers an MCPEDL account
     * @param {string} username
     * @param {string} email
     * @param {string} password
     * @returns {Promise<RegisterResponse>}
     */
    async register(username, email, password) {
        let response = await axios.post(`${this.baseEndpoint}${this.registerEndpoint}`, {
            username,
            password,
            email,
            password_confirmation: password,
            terms: true,
            age: true
        }, {
            headers: {
                "User-Agent": this.userAgent
            }
        })
        return response.data;
    }
    /**
     * @description Gets a user from their token
     * @param {string} token
     * @param {string} token_type
     * @returns {Promise<RegisterResponse>}
     */
    async getUserFromToken(token, token_type = "Bearer") {
        let response = await axios.get(`${this.baseEndpoint}${this.getUserByTokenEndpoint}`, {
            headers: {
                "User-Agent": this.userAgent,
                "Authorization": `${token_type} ${token}`
            }
        })
        return response.data;
    }
}
module.exports = new Auth();