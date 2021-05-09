CREATE TABLE `orders` (
  `id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `purchase_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci