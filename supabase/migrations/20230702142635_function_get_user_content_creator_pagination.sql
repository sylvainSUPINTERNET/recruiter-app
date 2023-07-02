DROP FUNCTION get_user_content_creator_details(offset_val INT, page_size INT);
DROP TYPE user_content_creator_type;

CREATE TYPE user_content_creator_type AS (
    id INT,
    firstName VARCHAR,
    email VARCHAR,
    pic_url TEXT,
    phoneNumber VARCHAR,
    payment_names TEXT[],
    niches TEXT[],
    networks_names VARCHAR[],
    networks_urls TEXT[],
    networks_global_stats_views BIGINT[]
);

CREATE OR REPLACE FUNCTION get_user_content_creator_details(offset_val INT, page_size INT)
RETURNS SETOF user_content_creator_type AS $$
BEGIN
    RETURN QUERY
    SELECT
        ucc.id,
        ucc.firstName,
        ucc.email,
        ucc.pic_url,
        ucc.phoneNumber,
        ucc.payment_names,
        ucc.niches,
        array_agg(COALESCE(n.network_name, '')),  -- replace NULL with an empty string
        array_agg(COALESCE(n.network_url, '')),  -- replace NULL with an empty string
        array_agg(COALESCE(n.global_stats_view, 0))  -- replace NULL with zero
    FROM
        user_content_creator AS ucc
    JOIN
        networks AS n ON ucc.id = n.user_content_creator_id
    GROUP BY
        ucc.id
    LIMIT page_size OFFSET offset_val;
END;
$$ LANGUAGE plpgsql;
