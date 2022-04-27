create table seed(
    id serial,
    seed_name text not null,
    days_to_germinate integer not null,
  	created_at timestamp default NOW(),
 	sync_date timestamp,
  	sync boolean default false
)
