const axios = require('axios').default;
const MCPEDLUtilities = require('../MCPEDLUtilities');
class Submissions extends MCPEDLUtilities {
    constructor() {
        super();
        this.apiBaseEndpoint = "https://api.mcpedl.com";
        this.slugEndpoint = "/api/route/slug/";
    }
    /**
     * @description Gets a submission by a slug
     * @param {string} slug 
     * @returns {Promise}
     * @async
     */
    async getSubmissionBySlug(slug) {
        try {
            // Gets the MCPEDL response
            let response = await axios.get(`${this.apiBaseEndpoint}${this.slugEndpoint}${slug}`, {
                headers: {
                    "User-Agent": this.userAgent
                }
            })
            return response.data
        } catch {
            return null;
        }
    }
}
module.exports = new Submissions();