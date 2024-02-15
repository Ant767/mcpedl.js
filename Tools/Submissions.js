const axios = require('axios').default;
const MCPEDLUtilities = require('../MCPEDLUtilities');
/**
 * @typedef {Object} SubmissionMeta
 * @property {string} type
 */
/**
 * @typedef {Object} User
 * @property {string} username
 * @property {string} user_nicename
 * @property {string} display_name
 * @property {string} avatar
 * @property {number} role
 * @property {number} submissions_count
 * @property {Object?} settings
 */
/**
 * @typedef {Object} Comment
 * @property {number} id
 * @property {string} text
 * @property {string} avatar
 * @property {Comment[]} children
 * @property {number} parent_id
 * @property {number} submission_id
 * @property {User} user
 * @property {string} status
 * @property {string} author
 * @property {string?} author_url
 * @property {number} user_id
 * @property {string} rating
 * @property {boolean} is_pinned
 * @property {boolean?} is_liked
 * @property {number} likes_count
 * @property {boolean} deleted
 * @property {boolean} edited
 * @property {string} created_at
 * @property {string} updated_at
 */
/**
 * @typedef {Object} CommentsRating
 * @property {number} id
 * @property {number} submission_id
 * @property {number} count
 * @property {number} best
 * @property {string} average
 * @property {string} created_at
 * @property {string} updated_at
 */
/**
 * @typedef {Object} ThumbnailsObject
 * @property {string} large
 * @property {string} medium
 * @property {string} small
 */
/**
 * @typedef {Object} MinecraftVersion
 * @property {number} id
 * @property {string?} category_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} name
 * @property {string} slug
 * @property {string?} term_id
 * @property {number} tag_type_id
 */
/**
 * @typedef {Object} Revision
 * @property {string} changelog
 * @property {number} id
 * @property {number} submission_id
 * @property {number} version
 */
/**
 * @typedef {Object} SubmissionCategoryPivot
 * @property {number} submission_version_id
 * @property {number} category_id
 */
/**
 * @typedef {Object} SubmissionCategory
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 * @property {number} term_id
 * @property {string?} created_at
 * @property {string?} updated_at
 * @property {number} parent_id
 * @property {string?} url
 * @property {SubmissionCategoryPivot?} pivot
 */
/**
 * @typedef {Object} Guide
 * @property {number} id
 * @property {number} category_id
 * @property {string} ios_url
 * @property {string} android_url
 * @property {string} windows_url
 * @property {string?} created_at
 * @property {string?} updated_at
 */
/**
 * @typedef {Object} RelatedSubmission
 * @property {number} id
 * @property {string} slug
 * @property {number} user_id
 * @property {number} type_id
 * @property {number} submission_version_id
 * @property {string} title
 * @property {string} image
 * @property {ThumbnailsObject} thumbnails
 * @property {string} submission_date
 */
/**
 * @typedef {Object} SubmissionDownload
 * @property {number} id
 * @property {string} name
 * @property {string} file
 * @property {number} type
 * @property {number} user_download_stat_count
 */
/**
 * @typedef {Object} SubmissionData
 * @property {number} id
 * @property {number} submission_version_id
 * @property {Comment[]} comments
 * @property {number} comments_total
 * @property {CommentsRating} comments_rating
 * @property {Comment?} pinned_comment
 * @property {string} update_date
 * @property {string} publish_date
 * @property {string} updated_at
 * @property {string} created_at
 * @property {string} slug
 * @property {number} user_id
 * @property {User} user
 * @property {string} username
 * @property {string} title
 * @property {number} type_id
 * @property {boolean} is_bookmarked
 * @property {string[]} submission_images
 * @property {string[]} submission_videos
 * @property {string} changelog
 * @property {string} description
 * @property {string} image
 * @property {ThumbnailsObject} thumbnails
 * @property {string?} texture
 * @property {string} installation
 * @property {string} introduction
 * @property {string} seed_unique_id
 * @property {string} server_ip
 * @property {number} port
 * @property {number} show_on_mobile
 * @property {string} status
 * @property {MinecraftVersion[]} minecraft_versions
 * @property {Object[]} resolutions
 * @property {string?} software
 * @property {Object[]} servertype
 * @property {string[]?} skins
 * @property {string[]?} tags
 * @property {string[]?} worlds
 * @property {string[]?} seeds
 * @property {string[]?} addons
 * @property {Revision[]} revisions
 * @property {SubmissionCategory[]} categories
 * @property {Guide} guide
 * @property {RelatedSubmission[]} related
 * @property {SubmissionDownload[]} downloads
 * @property {number} version
 * @property {string} website_link
 * @property {boolean?} updated_by_admin
 * @property {Object?} server_information
 */
/**
 * @typedef {Object} Submission
 * @property {SubmissionMeta} meta
 * @property {SubmissionData} data
 */
/**
 * @typedef {Object} SearchTag
 * @property {number} id
 * @property {number?} category_id
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} name
 * @property {string} slug
 * @property {number?} term_id
 * @property {number} tag_type_id
 */
/**
 * @typedef {Object} popular
 * @property {string} popular_week
 * @property {string} popular_month
 * @property {string} popular_all
 */
/**
 * @typedef {Object} SubmissionSearchResult
 * @property {number} type_id
 * @property {string} slug
 * @property {string} source
 * @property {string} title
 * @property {SearchTag[]} tags
 * @property {string} image
 * @property {string} created_at
 * @property {number} user_id
 * @property {string} sort_date
 * @property {PopularObject} popular
 * @property {number} submission_id
 * @property {number} version
 * @property {string} username
 * @property {string} user_nicename
 * @property {string} user_avatar
 * @property {string} average_rating
 * @property {string} short_description
 * @property {SubmissionCategory[]} categories
 * @property {ThumbnailsObject} thumbnails
 * @property {string} update_date
 * @property {string} publish_date
 * @property {number} id
 * @property {Object} server_information
 * @property {string} server_ip
 * @property {string[]?} servertype
 * @property {boolean} is_bookmarked
 * @property {string} status
 */
/**
 * @typedef {Object} SearchResponse
 * @property {string} status
 * @property {SubmissionSearchResult[]} data
 */
class Submissions extends MCPEDLUtilities {
    constructor() {
        super();
        this.apiBaseEndpoint = "https://api.mcpedl.com";
        this.slugEndpoint = "/api/route/slug/";
        this.getSubmissions = "/api/submissions";
    }
    /**
     * @description Gets a submission by a slug
     * @param {string} slug 
     * @returns {Promise<Submission>}
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
    /**
     * @description Searches MCPEDL by query
     * @param {string} query
     * @param {number?} perPage
     * @returns {Promise<SearchResponse>}
     */
    async searchByQuery(query, perPage = 10) {
        try {
            // https://api.mcpedl.com/api/submissions?per_page=10&is_actual_version=1&s=a
            let response = await axios.get(`${this.apiBaseEndpoint}${this.getSubmissions}`, {
                headers: {
                    "User-Agent": this.userAgent
                },
                "params": {
                    per_page: perPage.toString(),
                    is_actual_version: "1",
                    s: query
                }
            })
            return response.data
        } catch {
            return null;
        }
    }
}
module.exports = new Submissions();