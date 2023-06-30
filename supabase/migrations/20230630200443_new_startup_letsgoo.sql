CREATE TABLE user_content_creator (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    pic_url TEXT DEFAULT 'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1',
    email VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255),
    payment_names TEXT[] DEFAULT ARRAY['oneshot'],
    niches TEXT[] DEFAULT ARRAY[]::TEXT[],
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE INDEX idx_user_content_creator_payment_names ON user_content_creator USING gin (payment_names);
CREATE INDEX idx_user_content_creator_niches ON user_content_creator USING gin (niches);

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

CREATE TABLE user_content_creator_networks (
  user_content_creator_id INT REFERENCES user_content_creator(id),
  network_id INT REFERENCES networks(id),
  PRIMARY KEY (user_content_creator_id, network_id)
);

-- Insert mock values into user_content_creator table
INSERT INTO user_content_creator (firstName, email, phoneNumber, payment_names, niches, updated_at)
VALUES
    ('John', 'john@example.com', '1234567890', ARRAY['oneshot', 'subscription', 'affiliation'], ARRAY['gaming', 'technology'], NOW()),
    ('Jane', 'jane@example.com', '9876543210', ARRAY['oneshot'], ARRAY['fitness'], NOW());

-- Insert mock values into networks table
INSERT INTO networks (network_name, network_url, global_stats_view, user_content_creator_id, updated_at)
VALUES
    ('Network 1', 'https://network1.com', 1000, 1, NOW()),
    ('Network 2', 'https://network2.com', 2000, 1, NOW()),
    ('Network 3', 'https://network3.com', 1500, 2, NOW());

-- Insert mock values into user_content_creator_networks table
INSERT INTO user_content_creator_networks (user_content_creator_id, network_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 3);
