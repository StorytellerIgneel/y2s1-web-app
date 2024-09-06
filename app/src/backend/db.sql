CREATE DATABASE IF NOT EXISTS  WAD_ASSIGNMENT;

USE WAD_ASSIGNMENT;
CREATE TABLE IF NOT EXISTS users(
    username varchar(30),
    user_password varchar(30),
    CONSTRAINT PK_WAD_USERS PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS emails(
    username varchar(30),
    email varchar(30),
    salutation varchar(5),
    purpose varchar(20),
    subject varchar(30),
    message varchar(255),
    CONSTRAINT PK_WAD_EMAILS PRIMARY KEY (username, email),
    CONSTRAINT FK_WAD_EMAILS FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE IF NOT EXISTS users (
    user_id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR (20) NOT NULl,
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
);

CREATE TABLE IF NOT EXISTS games (
    game_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    img_src VARCHAR(255),
    `desc` TEXT,
    rating VARCHAR(50),
    rating_num INT,
    release_date DATE,
    developer VARCHAR(255),
    publisher VARCHAR(255),
    price DECIMAL(10, 2)
);



CREATE TABLE IF NOT EXISTS purchases (
    purchase_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    purchase_date DATETIME,
    total_amount DECIMAL(10, 2),
    payment_method VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS purchase_items (
    purchase_item_id INT AUTO_INCREMENT PRIMARY KEY,
    purchase_id INT,
    game_id INT,
    FOREIGN KEY (purchase_id) REFERENCES Purchases(purchase_id),
    FOREIGN KEY (game_id) REFERENCES Games(game_id)
);

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('105600', 'Terraria', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1666290860', 'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!', 'Overwhelmingly Positive', '1057516', '2011-05-17', 'Re-Logic', 'Re-Logic', '26.75');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('814380', 'Sekiro™: Shadows Die Twice - GOTY Edition', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1721684463', 'Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.', 'Overwhelmingly Positive', '216477', '2019-03-22', 'FromSoftware, Inc.', 'Activision (Excluding Japan and Asia), FromSoftware, Inc. (Japan), 方块游戏 (Asia)', '285.00');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('648800', 'Raft', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/648800/header.jpg?t=1725373838', 'Raft™ throws you and your friends into an epic oceanic adventure! Alone or together, players battle to survive a perilous voyage across a vast sea! Gather debris, scavenge reefs and build your own floating home, but be wary of the man-eating sharks!', 'Very Positive', '274865', '2022-06-21', 'Redbeet Interactive', 'Axolot Games', '38.00');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('2050650', 'Resident Evil 4', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg?t=1707455805', "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president\'s kidnapped daughter to a secluded European village, where there is something terribly wrong with the locals.', 'Overwhelmingly Positive', '92569', '2023-03-24', 'CAPCOM Co., Ltd.', 'CAPCOM Co., Ltd.', '187.00");

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('1245620', 'ELDEN RING', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1721682743', 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.', 'Very Positive', '700781', '2022-02-25', 'FromSoftware, Inc.', 'FromSoftware, Inc., Bandai Namco Entertainment', '199.00');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('1551360', 'Forza Horizon 5', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1723160896', 'Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world’s greatest cars. Blast off into Forza Horizon 5: Hot Wheels or Conquer the Sierra Nueva in the ultimate Horizon Rally Adventure experience. Requires Forza Horizon 5 game, expansion sold separately.', 'Very Positive', '175662', '2021-11-09', 'Playground Games', 'Xbox Game Studios', '199.00');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('736260', 'Baba Is You', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/736260/header.jpg?t=1698353847', 'Baba Is You is a puzzle game where the rules you have to follow are present as blocks you can interact with. By manipulating them, you can change how the game works, repurpose things you find in the levels and cause surprising interactions!', 'Overwhelmingly Positive', '17488', '2019-03-14', 'Hempuli Oy', 'Hempuli Oy', '32.00');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('1260320', 'Party Animals', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1260320/header.jpg?t=1719555296', 'Fight your friends as puppies, kittens and other fuzzy creatures in PARTY ANIMALS! Paw it out with your friends remotely, or huddle together for chaotic fun on the same screen. Interact with the world under our realistic physics engine. Did I mention PUPPIES?', 'Mostly Positive', '37750', '2023-09-20', 'Recreate Games', 'Source Technology', '62.00')

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('1332010', 'Stray', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg?t=1715873569', 'Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten cybercity and find their way home.', 'Overwhelmingly Positive', '129193', '2022-07-19', 'BlueTwelve Studio', 'Annapurna Interactive', '69.00');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('1593500', 'God of War', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg?t=1721154083', 'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.', 'Overwhelmingly Positive', '97379', '2022-01-14', 'Santa Monica Studio, Jetpack Interactive', 'PlayStation Publishing LLC', '209.00');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('2358720', 'Black Myth: Wukong', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg?t=1725007201', 'Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.', 'Overwhelmingly Positive', '561242', '2024-08-20', 'Game Science', 'Game Science', '219.00');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('1091500', 'Cyberpunk 2077', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg?t=1721647847', 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.', 'Very Positive', '676683', '2020-12-10', 'CD PROJEKT RED', 'CD PROJEKT RED', '219.00');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('264710', 'Subnautica', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg?t=1721004725', 'Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive.', 'Overwhelmingly Positive', '254673', '2018-01-23', 'Unknown Worlds Entertainment', 'Unknown Worlds Entertainment', '72.00');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('386940', 'Ultimate Chicken Horse', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/386940/header.jpg?t=1715624179', 'Ultimate Chicken Horse is a party platformer game where you build the level as you play, placing traps and hazards to screw your friends over, but trying not to screw yourself.', 'Overwhelmingly Positive', '33286', '2016-03-05', 'Clever Endeavour Games', 'Clever Endeavour Games', '45.00');

INSERT INTO `games` (`game_id`, `title`, `img_src`, `desc`, `rating`, `rating_num`, `release_date`, `developer`, `publisher`, `price`) VALUES 
('812140', "Assassin\'s Creed® Odyssey', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg?t=1692034673', 'Choose your fate in Assassin\'s Creed® Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.", 'Very Positive', '143319', '2018-10-06', 'Ubisoft Quebec, Ubisoft Montreal, Ubisoft Bucharest, Ubisoft Singapore, Ubisoft Montpellier, Ubisoft Kiev, Ubisoft Shanghai', 'Ubisoft', '189.00');




