-- Deploy oharvest:4.crud_plot to pg

BEGIN;

CREATE OR REPLACE FUNCTION plot_insert(c json) RETURNS plot AS $$
    INSERT INTO plot
	(name)
	VALUES (
        c->>'name'
    ) RETURNING *;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION plot_update(c json) RETURNS plot AS $$
    UPDATE plot
        SET 
        name=c->>'name'
        WHERE id=(c->>'id')::int
        RETURNING *;
$$ LANGUAGE SQL;

COMMIT;
