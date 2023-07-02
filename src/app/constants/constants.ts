export const TABLE_NICHES = "niches";
export const TABLE_PROFILE = "user_content_creator";



/** FUNCTIONS pgsql  */

export const get_user_content_creator_details = {
    name: 'get_user_content_creator_details',
    params: {
        offset_val: 'offset_val',
        page_size: 'page_size'
    }
}

/** PROCEDURE pgsql */