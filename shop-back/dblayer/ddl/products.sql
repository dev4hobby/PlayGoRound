CREATE TABLE `products` (
  `id` int NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `imgalt` varchar(50) DEFAULT NULL,
  `description` text,
  `name` varchar(100) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `promotion` float DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci