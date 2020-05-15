CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(255),
  `uname` varchar(255),
  `pword` varchar(255),
  `business_id` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `businessInfo` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `addy` varchar(255),
  `capacity` int
);

-- entering this into the db produces error --> doesnt like varchar[]
CREATE TABLE `rooms` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `status` varchar(255),
  `capacity` int,
  `amenities` varchar[],
  `price` int
);

CREATE TABLE `bookings` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `start` datetime,
  `end` datetime,
  `room` int,
  `price` int,
  `guest` int
);

CREATE TABLE `guests` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(255),
  `status` varchar(255)
);

-- entering this into the db produces error --> doesnt like int[]
CREATE TABLE `events` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `start` datetime,
  `end` datetime,
  `price` int,
  `capacity` int,
  `guests` int[],
  `description` varchar(255)
);

ALTER TABLE `users` ADD FOREIGN KEY (`business_id`) REFERENCES `businessInfo` (`id`);

ALTER TABLE `bookings` ADD FOREIGN KEY (`room`) REFERENCES `rooms` (`id`);

ALTER TABLE `bookings` ADD FOREIGN KEY (`guest`) REFERENCES `guests` (`id`);

ALTER TABLE `events` ADD FOREIGN KEY (`guests`) REFERENCES `guests` (`id`);
