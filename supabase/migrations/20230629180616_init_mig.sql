CREATE TABLE niches (
    id SERIAL PRIMARY KEY,
    niche_name VARCHAR(255) NOT NULL
);
CREATE INDEX idx_niche_name ON niches (niche_name);

INSERT INTO niches (niche_name) VALUES
    ('Nature'),
    ('Animaux'),
    ('Voyage'),
    ('Cuisine'),
    ('Lifestyle'),
    ('Mode'),
    ('Beauté'),
    ('Sport');

CREATE TABLE payment_names (
    id SERIAL PRIMARY KEY,
    payment_name VARCHAR(255) NOT NULL
);
CREATE INDEX idx_payment_name ON payment_names (payment_name);

INSERT INTO payment_names (payment_name) VALUES
    ('oneshot'),
    ('subscription');

CREATE TABLE user_content_creator (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    pic_url TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE networks (
    id SERIAL PRIMARY KEY,
    network_name VARCHAR(255) NOT NULL,
    network_url TEXT NOT NULL,
    global_stats_view BIGINT NOT NULL,
    user_content_creator_id INT REFERENCES user_content_creator(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);
CREATE INDEX idx_global_stats_view ON networks (global_stats_view);
CREATE INDEX idx_network_name ON networks (network_name);

CREATE TABLE payment_name_content_creator (
    id SERIAL PRIMARY KEY,
    payment_name_id INT REFERENCES payment_names(id),
    user_content_creator_id INT REFERENCES user_content_creator(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE niche_network (
    id SERIAL PRIMARY KEY,
    niche_id INT REFERENCES niches(id),
    network_id INT REFERENCES networks(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);
