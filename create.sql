drop table branas.todo;

create table branas.todo (
	id text,
	description text,
	done boolean
);

insert into branas.todo (id, description, done) values ('1', 'Ir para o trabalho', true);
insert into branas.todo (id, description, done) values ('2', 'Ficar para beber', false);
insert into branas.todo (id, description, done) values ('3', 'Voltar pra casa', false);
