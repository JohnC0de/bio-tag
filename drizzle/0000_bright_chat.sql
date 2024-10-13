CREATE TABLE `bio-tag_etiqueta` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`npm` integer,
	`name` text,
	`created_at` integer,
	`location` text,
	`txd` text,
	`c_asa` text,
	`c_tarso` text,
	`c_total` text,
	`muda` text,
	`massa` text,
	`sexo` text,
	`coletor` text
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `bio-tag_etiqueta` (`name`);