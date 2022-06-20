DROP TABLE IF EXISTS blog;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS hibernate_sequence;

CREATE TABLE `blog` (
  `id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` longblob,
  `likes_num` int DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `text_content` text,
  PRIMARY KEY (`id`)
);

CREATE TABLE `tag` (
  `id` int NOT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
);

INSERT INTO hibernate_sequence (next_val) VALUES (10);

INSERT INTO tag VALUES (1, 'travel');
INSERT INTO tag VALUES (2, 'food');
INSERT INTO tag VALUES (3, 'sport');
INSERT INTO tag VALUES (4, 'people');
INSERT INTO tag VALUES (5, 'finance');
