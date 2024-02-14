class MCPEDLUtilities {
    constructor() {
        // MCPEDL has protection against requests with fake user agents, so you need a user agent of a real browser.
        this.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0";
    }
    cleanUrl(url) {
        let newUrl = url;

        if(newUrl.startsWith('https://')) newUrl = newUrl.substring('https://'.length)
        if(newUrl.startsWith('mcpedl.com')) newUrl = newUrl.substring('mcpedl.com'.length)

        return newUrl;
    }
}
module.exports = MCPEDLUtilities;