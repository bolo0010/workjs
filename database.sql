-- --------------------------------------------------------
-- Host:                         localhost
-- Wersja serwera:               10.6.14-MariaDB-cll-lve - MariaDB Server
-- Serwer OS:                    Linux
-- HeidiSQL Wersja:              12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Zrzut struktury tabela projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` varchar(36) NOT NULL,
  `id_student` varchar(36) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `demo_link` varchar(2048) NOT NULL,
  `dev_link` varchar(2048) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_projects_users` (`id_student`),
  CONSTRAINT `FK_projects_users` FOREIGN KEY (`id_student`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli projects: ~5 rows (około)
INSERT INTO `projects` (`id`, `id_student`, `name`, `description`, `demo_link`, `dev_link`) VALUES
	('0d5913f3-ad67-457d-95ed-039d97dcc3cd', '1e7c855b-81aa-4370-a5b6-729e8f7ac9cf', 'Dashboard', 'W ramach tego projektu stworzyłem interaktywne narzędzie do zarządzania danymi w sklepie internetowym. Wykorzystałem React.js do budowy responsywnego interfejsu użytkownika, umożliwiającego łatwe przeglądanie, dodawanie i aktualizowanie produktów, zarządzanie zamówieniami oraz generowanie raportów sprzedażowych. ', 'https://github.com/Zdychu/Dashboard', 'https://github.com/Zdychu/Dashboard'),
	('2ecb8a99-8e67-44e7-b3cf-aae4582daf68', '1e7c855b-81aa-4370-a5b6-729e8f7ac9cf', 'Travel Planner', 'W ramach tego projektu stworzyłem aplikację internetową przy użyciu React.js, umożliwiającą planowanie podróży. Aplikacja integrowała się z zewnętrznym API dostarczającym informacje o miejscach turystycznych, hotelach i trasach lotniczych. Użytkownicy mogli wyszukiwać miejsca, przeglądać atrakcje, tworzyć plany podróży, dodawać rezerwacje hotelowe oraz rezerwować bilety lotnicze.', 'https://github.com/Zdychu/TravelPlanner', 'https://github.com/Zdychu/TravelPlanner'),
	('5502c146-7af6-4c9f-862a-73d55fe4430f', '1e7c855b-81aa-4370-a5b6-729e8f7ac943', 'todo', 'Projekt ten to aplikacja oparta na React.js, która umożliwia użytkownikom zarządzanie swoimi codziennymi zadaniami i listami do zrobienia. Głównym celem tego projektu jest usprawnienie organizacji i skuteczności w wykonywaniu obowiązków.', 'https://github.com/imitck', 'https://github.com/imitck'),
	('ae03853d-6760-4154-9144-ce8a4f0002b0', '1e7c855b-81aa-4370-a5b6-729e8f7ac9cf', 'ToDoApp', 'W ramach tego projektu stworzyłem API w oparciu o Node.js i do zarządzania zadaniami. API umożliwiało użytkownikom tworzenie, edytowanie, usuwanie i przeglądanie zadań. Wykorzystałem bazę danych MongoDB do przechowywania danych zadań.', 'https://github.com/Zdychu/ToDoApp', 'https://github.com/Zdychu/ToDoApp'),
	('b52b8bc8-c1ed-4d38-b358-4d3f91473055', '8e07eccb-ad88-45ce-9308-a984ab450074', 'Todo', 'To aplikacja, która umożliwia użytkownikom organizowanie i zarządzanie listą zadań do wykonania. Użytkownicy mogą tworzyć, edytować, usuwać i oznaczać zadania jako wykonane. Aplikacja zapewnia prosty interfejs użytkownika, który umożliwia łatwe dodawanie nowych zadań, śledzenie postępów i utrzymanie porządku w codziennych obowiązkach.', 'https://github.com/adamgl', 'https://github.com/adamgl');

-- Zrzut struktury tabela recruiter_data
CREATE TABLE IF NOT EXISTS `recruiter_data` (
  `id` varchar(36) NOT NULL,
  `organisation` varchar(200) NOT NULL,
  `position` varchar(150) NOT NULL,
  `organisation_link` varchar(2048) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli recruiter_data: ~7 rows (około)
INSERT INTO `recruiter_data` (`id`, `organisation`, `position`, `organisation_link`) VALUES
	('14848796-0ac6-407a-ae5e-dbf1c1f7ba3c', 'dsadsad', 'sadsdasdas', 'https://stackoverflow.com/questions/47512104/how-to-reset-location-state-in-react-router'),
	('2b834971-7ca8-4b2f-81d8-0b4bb6cda661', 'Google', 'Rekruter', 'https://www.google.com/'),
	('839733f5-6b0f-43bb-a4ee-6ce022fa8edc', 'adsda', 'ssda', 'https://stackoverflow.com/questions/40099431/how-do-i-clear-location-state-in-react-router-on-page-reload'),
	('8dc4f5b8-d5b4-47d7-8854-77b6086ff5cd', 'TRR', 'HR', 'https://www.facebook.com/'),
	('9806f67c-2438-409b-8293-106cb6c1ba77', 'ABC', 'Rekruter', 'https://chat.openai.com'),
	('dsad', 'dasd', 'dasda', 'dsadas'),
	('f36d602f-8a52-4e45-b15e-f1f05f960298', 'sdadasd', 'sadassdsa', 'https://www.facebook.com/groups/263886051230313');

-- Zrzut struktury tabela student_data
CREATE TABLE IF NOT EXISTS `student_data` (
  `id` varchar(36) NOT NULL,
  `university` varchar(200) NOT NULL,
  `field` varchar(200) NOT NULL,
  `about` text NOT NULL,
  `work_experience` text DEFAULT NULL,
  `certificates` text DEFAULT NULL,
  `practices` text DEFAULT NULL,
  `courses` text DEFAULT NULL,
  `activities` text DEFAULT NULL,
  `hobby` text DEFAULT NULL,
  `languages` text DEFAULT NULL,
  `expected_graduation_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli student_data: ~3 rows (około)
INSERT INTO `student_data` (`id`, `university`, `field`, `about`, `work_experience`, `certificates`, `practices`, `courses`, `activities`, `hobby`, `languages`, `expected_graduation_date`) VALUES
	('AVCC', 'Politechnika Łódzka', 'Informatyka w ochronie środowiska', 'Jako student na kierunku informatyki w ochronie środowiska, łączę moją wiedzę z zakresu informatyki z silnym zainteresowaniem ochroną środowiska. Wierzę, że innowacyjne technologie mogą odegrać kluczową rolę w rozwiązaniu globalnych problemów ekologicznych, dlatego zdecydowałem się poświęcić swoje studia na tę dziedzinę.\n\nMoje umiejętności techniczne obejmują programowanie w różnych językach, takich jak Python i C#. Zdobyłem także doświadczenie w tworzeniu aplikacji internetowych, korzystając z technologii takich jak HTML, CSS, JavaScript oraz frameworków takich Angular.js.\n\nJestem osobą kreatywną, skrupulatną i gotową do nauki. Cechuje mnie zdolność do pracy w zespole, umiejętność rozwiązywania problemów i elastyczność w dostosowywaniu się do nowych sytuacji. Jestem zmotywowany, aby połączyć moją pasję do informatyki z działaniami na rzecz ochrony środowiska, aby wnieść pozytywny wkład w naszą planetę.\n\nJestem przekonany, że moje umiejętności, determinacja i zaangażowanie w ochronę środowiska uczynią mnie cennym aktywem dla każdego projektu związanego z tworzeniem innowacyjnych rozwiązań ekologicznych.', NULL, NULL, NULL, 'Programowanie aplikacji internetowych - kurs zaawansowany, 2019', 'Członek Studenckiego Radia "Żak" Politechniki Łódzkiej.', 'Jako miłośnik przyrody, uwielbiam spędzać czas na łonie natury i uwieczniać jej piękno za pomocą aparatu fotograficznego. Przez obiektyw staram się uchwycić unikalne momenty, krajobrazy i różnorodność ekosystemów. To nie tylko inspiruje mnie, ale także przypomina o konieczności ochrony naszego środowiska.', 'Język angielski na poziomie komunikatywnym.', '2024-02-20'),
	('dasdasa', 'Politechnika Częstochowska', 'Informatyka', 'Jestem pełen pasji i entuzjazmu studentem informatyki, którego nieustannie napędza chęć ciągłego rozwoju w tej fascynującej dziedzinie. Od momentu, gdy po raz pierwszy zetknąłem się z programowaniem, zrozumiałem, że chcę poświęcić swoją karierę na odkrywanie nowych technologii i tworzenie innowacyjnych rozwiązań.\nW trakcie mojej edukacji, podjąłem się wielu projektów, które pozwoliły mi zdobyć wszechstronne umiejętności programistyczne. Mam doświadczenie w tworzeniu interaktywnych stron internetowych, wykorzystując HTML, CSS i JavaScript.\nNie ograniczam się tylko do opanowania języków programowania. Interesuję się również nowymi technologiami, takimi jak sztuczna inteligencja, uczenie maszynowe i analiza danych. Dążę do rozwoju w tych obszarach, aby móc wykorzystać potencjał tych technologii w praktycznych zastosowaniach.\nJestem również świadomy znaczenia pracy zespołowej w branży informatycznej. Posiadam umiejętność efektywnej komunikacji i współpracy z innymi programistami, co przyczynia się do osiągania wspólnych celów projektowych. Jestem otwarty na nowe wyzwania i gotowy do uczenia się nowych technologii i narzędzi, aby stale podnosić swoje umiejętności.\nJestem zdeterminowany, aby osiągnąć sukces w dziedzinie informatyki poprzez ciągłą naukę, praktykę i zaangażowanie. Moja pasja do programowania i zaangażowanie w rozwój technologiczny czynią mnie wartościowym kandydatem do różnorodnych projektów i stanowisk w branży informatycznej.', 'Administrator serwerowni, 2018 - teraz, Radomsko Korner Sp z o.o.', 'English B2 First Cambridge 2020', '', '', NULL, 'Muzyka jest dla mnie nieodłączną częścią życia. Gram na gitarze od kilku lat i doskonale się przy tym bawię. Często udzielam się również w lokalnym zespole muzycznym, co pozwala mi rozwijać swoje umiejętności muzyczne i czerpać radość ze wspólnego grania. Odkrywanie nowych miejsc i kultur to dla mnie niesamowita przygoda. Uwielbiam eksplorować różne zakątki świata, poznawać nowych ludzi i doświadczać różnorodności kulturowej. Podróże dają mi możliwość poszerzania horyzontów i zyskiwania cennych doświadczeń, które wpływają na moje spojrzenie na świat.', 'Język angielski na poziomie B2, potwierdzony certyfikatem\nJęzyk niemiecki na poziomie B1', '2024-10-30'),
	('e84acf2d-fc83-45ed-92e2-2bfbdc235c86', 'Uniwersytet Łódzki', 'Informatyka Ekonomiczna', 'Jestem ambitnym studentem na kierunku informatyki ekonomicznej, pasjonującym się połączeniem technologii informacyjno-komunikacyjnych i zagadnień biznesowych. Moje główne zainteresowania leżą w obszarze analizy danych, optymalizacji procesów biznesowych i zarządzania informacją.\n\nOd najmłodszych lat fascynowałem się technologią i jej wpływem na rozwój społeczeństwa. Moja pasja do informatyki zrodziła się z przekonania, że technologia może być kluczowym czynnikiem w rozwiązywaniu złożonych problemów gospodarczych. Chciałbym połączyć swoje umiejętności programistyczne z wiedzą ekonomiczną, aby tworzyć innowacyjne rozwiązania, które przyniosą realne korzyści dla firm i społeczności.\n\nW trakcie mojej edukacji zdobyłem szeroki zakres umiejętności, takich jak programowanie w językach takich jak Java, C#, JavaScript, Python i SQL, projektowanie baz danych, analiza statystyczna oraz tworzenie i wdrażanie aplikacji webowych. Mam doświadczenie w pracy z narzędziami do analizy danych, takimi jak Power BI, oraz w wykorzystywaniu algorytmów uczenia maszynowego do przewidywania trendów biznesowych.\n\nJestem również zespołowym graczem i dobrze radzę sobie w dynamicznym środowisku pracy. Współpraca i wymiana wiedzy z innymi pasjonatami technologii stanowią dla mnie kluczowe elementy rozwoju. Chętnie uczestniczę w projektach grupowych, gdzie mogę wykorzystać swoje umiejętności programistyczne, a także rozwijać zdolności komunikacyjne i zarządzania projektem.\n\nJestem samodzielny, elastyczny i potrafię radzić sobie z wyzwaniami. Cenię sobie ciągłe uczenie się i rozwój, dlatego jestem otwarty na nowe możliwości i technologie. Chciałbym znaleźć inspirujące środowisko pracy, które pozwoli mi wykorzystać moje umiejętności w rozwiązywaniu realnych problemów biznesowych.\n\nJestem przekonany, że moje umiejętności techniczne i zdolności analityczne mogą przyczynić się do osiągnięcia sukcesu w roli, w której będę mógł łączyć najlepsze praktyki informatyczne z strategią biznesową. Jestem gotowy podjąć wyzwania i tworzyć innowacyjne rozwiązania, które przyczynią się do sukcesu mojego przyszłego pracodawcy.', '', 'Google Ads - certyfikat w zakresie reklam w wyszukiwarce Google, sierpień 2022\nFacebook Blueprint - certyfikat w zakresie reklam na Facebooku, grudzień 2022\nJęzyk angielski - certyfikat CAE (C1 Advanced), lipiec 2019', 'Praktyki studenckie, PKO Bank Polski Warszawa sierpień 2022 - luty 2023', 'Cisco Networking Academy Program 2019', '', 'Programowanie to nie tylko moja dziedzina studiów, ale również pasja, którą rozwijam w wolnym czasie. Lubię eksperymentować z różnymi językami programowania i frameworkami, tworząc własne aplikacje mobilne i webowe. To daje mi nie tylko możliwość rozwijania umiejętności programistycznych, ale także kreatywnego wyrażania swoich pomysłów. Od najmłodszych lat fascynowały mnie gry komputerowe. Grając w różnorodne gatunki gier, rozwijałem zdolności logicznego myślenia, skupienie i umiejętność pracy zespołowej. W ostatnich latach zainteresowałem się także e-sportem i uczestnictwem w turniejach, gdzie mogę rywalizować z innymi graczami na najwyższym poziomie.', 'Język angielski na poziomie B2.', '2023-10-30');

-- Zrzut struktury tabela student_data_technologies
CREATE TABLE IF NOT EXISTS `student_data_technologies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_technology` int(11) NOT NULL,
  `id_student_data` varchar(36) NOT NULL,
  `knowledge` int(11) NOT NULL,
  `skills` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_student_data_technologies_technologies` (`id_technology`),
  KEY `FK_student_data_technologies_student_data` (`id_student_data`),
  CONSTRAINT `FK_student_data_technologies_student_data` FOREIGN KEY (`id_student_data`) REFERENCES `student_data` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_student_data_technologies_technologies` FOREIGN KEY (`id_technology`) REFERENCES `technologies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli student_data_technologies: ~4 rows (około)
INSERT INTO `student_data_technologies` (`id`, `id_technology`, `id_student_data`, `knowledge`, `skills`) VALUES
	(62, 1, 'e84acf2d-fc83-45ed-92e2-2bfbdc235c86', 2, 'Mam umiejętność projektowania i tworzenia wielokrotnego użytku komponentów w React.js. Potrafię skonstruować interfejs użytkownika za pomocą wysoce modularnej struktury komponentów, co umożliwia łatwą konserwację i rozszerzalność kodu. Wykorzystuję narzędzia takie jak React Redux i Context API do efektywnego zarządzania stanem aplikacji. Potrafię projektować i implementować globalny stan, dzięki czemu aplikacja jest skalowalna i łatwa w utrzymaniu.'),
	(63, 5, 'e84acf2d-fc83-45ed-92e2-2bfbdc235c86', 2, 'Potrafię tworzyć wydajne serwery w Node.js. Potrafię obsługiwać żądania HTTP, tworzyć endpointy API oraz zarządzać danymi wejściowymi i wyjściowymi.'),
	(64, 4, 'AVCC', 3, 'Potrafię budować dynamiczne interfejsy użytkownika za pomocą Angular.js. Wykorzystuję komponenty, dyrektywy i usługi do tworzenia interaktywnych elementów, takich jak formularze, tabele, nawigacje, listy, przyciski itp. Dzięki temu użytkownicy mogą łatwo korzystać z aplikacji i uzyskiwać optymalne doświadczenie użytkownika. Znam i umiem wykorzystywać mechanizm routingu w Angular.js. Pozwala mi to tworzyć nawigację między różnymi widokami i komponentami aplikacji. Dzięki temu użytkownicy mogą swobodnie poruszać się po stronach,'),
	(65, 1, 'dasdasa', 3, 'Znam i potrafię wykorzystać bibliotekę React Router do obsługi dynamicznego routingu w aplikacji React.js. Jestem w stanie zapewnić płynne przechodzenie między różnymi widokami i zarządzać stanem nawigacji. Znam techniki komunikacji z serwerem za pomocą AJAX i potrafię wykorzystać biblioteki takie jak Axios czy Fetch API do wykonywania żądań HTTP i obsługi odpowiedzi. Jestem w stanie zintegrować aplikację React.js z różnymi API i korzystać z otrzymanych danych. Znam biblioteki do stylowania interfejsów użytkownika w React.js, takie jak CSS Modules, Styled Components lub Material-UI. Mam umiejętność tworzenia estetycznych i responsywnych interfejsów użytkownika, które są zgodne z najlepszymi praktykami projektowania.');

-- Zrzut struktury tabela ntechnologies
CREATE TABLE IF NOT EXISTS `technologies` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `type` enum('framework','library','other') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli technologies: ~6 rows (około)
INSERT INTO `technologies` (`id`, `name`, `type`) VALUES
	(1, 'React', 'library'),
	(2, 'Express', 'framework'),
	(3, 'Vue', 'framework'),
	(4, 'Angular', 'framework'),
	(5, 'Node', 'other'),
	(6, 'Webpack', 'other');

-- Zrzut struktury tabela users
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(36) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `second_name` varchar(75) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(9) NOT NULL,
  `created_at` date NOT NULL,
  `account_type` enum('student','recruiter') NOT NULL,
  `id_student_data` varchar(36) DEFAULT NULL,
  `id_recruiter_data` varchar(36) DEFAULT NULL,
  `hash` char(128) NOT NULL,
  `salt` char(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone_number` (`phone_number`),
  KEY `FK_users_student_data` (`id_student_data`),
  KEY `FK_users_recruiter_data` (`id_recruiter_data`),
  CONSTRAINT `FK_users_recruiter_data` FOREIGN KEY (`id_recruiter_data`) REFERENCES `recruiter_data` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_users_student_data` FOREIGN KEY (`id_student_data`) REFERENCES `student_data` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli users: ~4 rows (około)
INSERT INTO `users` (`id`, `first_name`, `second_name`, `email`, `phone_number`, `created_at`, `account_type`, `id_student_data`, `id_recruiter_data`, `hash`, `salt`) VALUES
	('1e7c855b-81aa-4370-a5b6-729e8f7ac943', 'Grzegorz', 'Stacherski', 'stacherski10@gmail.com', '604228395', '2023-05-16', 'student', 'dasdasa', NULL, 'edff5d6c193efa6c8b0d57e02c4fe800100526dbe73acab11a1e15b285562afd911aabd328dade687ecdd824aa1056dc965e8233959d7ccbde8ad9d73d1c375d', '680b61d1a2d15efbe865ee974d27ee6267f853b1d875982f0636151ac5922db8'),
	('1e7c855b-81aa-4370-a5b6-729e8f7ac9cf', 'Piotr', 'Kulka', 'piotr.kulka@gmail.com', '532555432', '2023-05-09', 'student', 'e84acf2d-fc83-45ed-92e2-2bfbdc235c86', NULL, 'edff5d6c193efa6c8b0d57e02c4fe800100526dbe73acab11a1e15b285562afd911aabd328dade687ecdd824aa1056dc965e8233959d7ccbde8ad9d73d1c375d', '680b61d1a2d15efbe865ee974d27ee6267f853b1d875982f0636151ac5922db8'),
	('8e07eccb-ad88-45ce-9308-a984ab450074', 'Adam', 'Baryła', 'adam.baryla@interia.pl', '762948522', '2023-05-09', 'student', 'AVCC', NULL, 'edff5d6c193efa6c8b0d57e02c4fe800100526dbe73acab11a1e15b285562afd911aabd328dade687ecdd824aa1056dc965e8233959d7ccbde8ad9d73d1c375d', '680b61d1a2d15efbe865ee974d27ee6267f853b1d875982f0636151ac5922db8'),
	('8e07eccb-ad88-45ce-9308-a984ab450077', 'Artur', 'Masłowski', 'arturmaslowski10@gmail.com', '723456231', '2023-05-16', 'recruiter', NULL, '2b834971-7ca8-4b2f-81d8-0b4bb6cda661', 'edff5d6c193efa6c8b0d57e02c4fe800100526dbe73acab11a1e15b285562afd911aabd328dade687ecdd824aa1056dc965e8233959d7ccbde8ad9d73d1c375d', '680b61d1a2d15efbe865ee974d27ee6267f853b1d875982f0636151ac5922db8');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
