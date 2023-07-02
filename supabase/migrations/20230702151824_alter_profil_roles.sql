ALTER TABLE user_content_creator
ADD main_role TEXT DEFAULT 'Influenceur' NOT NULL;

CREATE INDEX idx_user_content_creator_main_role ON user_content_creator(main_role);

