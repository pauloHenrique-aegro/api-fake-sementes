create table seed(
    id serial,
    seed_name text not null,
    days_to_germinate integer not null,
  	sync boolean default false
)
