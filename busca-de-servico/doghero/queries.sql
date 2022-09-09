-- Active: 1662335866131@@35.226.146.116@3306@joy-419892-natalia-alves

CREATE TABLE IF NOT EXISTS DOG_WALKING (
  id VARCHAR(64) PRIMARY KEY,
  stats VARCHAR(64) NOT NULL,
  appointment_day DATE NOT NULL,
  price DOUBLE NOT NULL,
  duration INT NOT NULL,
  latitude DOUBLE NOT NULL,
  longitude DOUBLE NOT NULL,
  pets INT NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL
);

-- ALTER TABLE `DOG_WALKING` CHANGE pets pets VARCHAR(50) NOT NULL


INSERT INTO `DOG_WALKING`(
  id,
  stats,
  appointment_day,
  price,
  duration,
  latitude,
  longitude,
  pets,
  start_time,
  end_time
)
VALUES
(
  "001",
  "In Progress",
  "2022-07-19",
  "50",
  "45:00",
  "-19.912998",
  "-43.940933",
  "Luffy",
  "09:30:00",
  "11:00:00"
);

-- select * from `DOG_WALKING`;