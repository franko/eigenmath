function
partition_integrand(F, X)
{
	var h, p1;

	// push const part

	h = stack.length;
	p1 = cdr(F);
	while (iscons(p1)) {
		if (!findf(car(p1), X))
			push(car(p1));
		p1 = cdr(p1);
	}

	if (h == stack.length)
		push_integer(1);
	else
		multiply_factors(stack.length - h);

	// push var part

	h = stack.length;
	p1 = cdr(F);
	while (iscons(p1)) {
		if (findf(car(p1), X))
			push(car(p1));
		p1 = cdr(p1);
	}

	if (h == stack.length)
		push_integer(1);
	else
		multiply_factors(stack.length - h);
}
