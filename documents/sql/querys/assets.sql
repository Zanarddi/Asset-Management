CREATE TABLE types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
);

CREATE TABLE assets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    model TEXT,
    description TEXT,
    state TEXT NOT NULL,
    observation TEXT,
    type_id INTEGER NOT NULL,
    imeia TEXT,
    imeib TEXT,
    serial TEXT,
    express_code TEXT,
    asset_code TEXT,
    asset_code_new TEXT,
    it_asset_code TEXT,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    FOREIGN KEY (type_id) REFERENCES types (id)
);
