UPDATE user_content_creator
SET pic_url = 'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1';

INSERT INTO payment_names (id, payment_name) VALUES
    (3, 'affiliation');


--- add network to user
INSERT INTO networks 
(id, network_name, network_url, global_stats_view, user_content_creator_id)
VALUES (1, 'tiktok', 'https://www.tiktok.com/', 100000, 1);

--- add niche to network
INSERT INTO niche_network (
    niche_id,
    network_id
) VALUES (
    1,1
);

ALTER TABLE payment_name_content_creator
RENAME TO payment_name_user_content_creator;

--- add payment to user
INSERT INTO payment_name_user_content_creator (
    payment_name_id,
    user_content_creator_id
) VALUES (
    1,1
);
--- add another payment
INSERT INTO payment_name_user_content_creator (
    payment_name_id,
    user_content_creator_id
) VALUES (
    3,1
);
