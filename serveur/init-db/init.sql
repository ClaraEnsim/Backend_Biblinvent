CREATE TABLE maisons_edition (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    localisation VARCHAR(255),
    email VARCHAR(255),
    type_livre TEXT[],         -- ex : ['Roman', 'BD']
    themes TEXT[],             -- ex : ['Aventure', 'Amour']
    public_cible TEXT[]        -- ex : ['Enfant', 'Adulte']
);

INSERT INTO maisons_edition (nom, localisation, email, type_livre, themes, public_cible)
VALUES (
    'Éditions Soleil',
    'Paris',
    'contact@soleil.fr',
    ARRAY['Poesie', 'Roman'],
    ARRAY['Romance', 'Aventure'],
    ARRAY['Adolescent', 'Adulte']
);

INSERT INTO maisons_edition (nom, localisation, email, type_livre, themes, public_cible)
VALUES (
    'Le chat qui prise',
    'Lyon',
    'contact@chat.fr',
    ARRAY['Conte'],
    ARRAY['Science-fiction', 'Fantastique', 'Animation'],
    ARRAY['Enfant']
);

INSERT INTO maisons_edition (nom, localisation, email, type_livre, themes, public_cible)
VALUES (
    'Monsieur le livre',
    'Le Mans',
    'contact@leLivre.fr',
    ARRAY['piece de theatre', 'Roman', 'Nouvelle'],
    ARRAY['Policier', 'Thriller'],
    ARRAY['Adolescent', 'Adulte']
);
