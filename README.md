# modernity.thedarph.com
A website containing artifacts and interactive online art installations for the Modernity album

This is a very simple front end to the site. Think of it like a fun 90s free form site. We're not trying to make it pixel perfect. It's supposed to feel authentic and free.

## TODO

- Add AI bot protection
- Set up a subdomain
- Using Nginx will make hosting microservices easier
- __Build the degrading audio site as a sepate backend__
	- Users can purchase the exact version of the uniquely degraded audio they've generated (it will be unique to them only - Stripe integration necessary)
- Set up webpack to compile assets
	- Make that shit fast (on load, I don't care how long it takes to transpile/compile)
- Only use React if needed
- No using Tailwind or stupid front-end frameworks. CSS is not that hard, guys. We know how to create simple, reliable grid systems and have for decades now

- Write test env setup and run instructions
- Write deploy instructions
- Write up deploy prep instructions
	- No we do not need Docker for everything. Node, Ruby, etc. doesn't need a container it's not that complicated, stop complicating everything just because Zuckenborg decided it was cool to do so while he was eating beef brisket or whatever
