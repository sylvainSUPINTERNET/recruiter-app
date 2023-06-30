
DROP FUNCTION IF EXISTS get_user_content_creators_with_networks();


CREATE OR REPLACE FUNCTION get_user_content_creators_with_networks()
  RETURNS TABLE (
    id INTEGER,
    firstName TEXT,
    email TEXT,
    phoneNumber TEXT,
    payment_names TEXT,
    niches TEXT[],
    networks_names TEXT[],
    networks_urls TEXT[],
    networks_global_stats_views INT[]
  )
AS $$
BEGIN
  RETURN QUERY
    SELECT 
        ucc.id, 
        ucc.firstName, 
        ucc.email, 
        ucc.phoneNumber, 
        ucc.payment_names, 
        ucc.niches, 
        array_agg(n.network_name) AS networks_names,
        array_agg(n.network_url) AS networks_urls,
        array_agg(n.global_stats_view) AS networks_global_stats_views
    FROM 
        user_content_creator AS ucc
    JOIN 
        networks AS n ON ucc.id = n.user_content_creator_id
    GROUP BY 
        ucc.id;
END;
$$ LANGUAGE plpgsql;
