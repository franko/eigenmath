function
emit_numerators(u, p)
{
	var q, v;

	v = {type:LINE, a:[], level:u.level};

	p = cdr(p);
	q = car(p);

	if (isrational(q)) {
		if (Math.abs(q.a) != 1)
			emit_roman_text(v, Math.abs(q.a).toFixed(0));
		p = cdr(p);
	}

	while (iscons(p)) {

		q = car(p);
		p = cdr(p);

		if (isdenominator(q))
			continue;

		if (v.a.length > 0)
			emit_medium_space(v);

		emit_factor(v, q);
	}

	if (v.a.length == 0)
		emit_roman_text(v, "1"); // there were no numerators

	if (v.a.length == 1)
		v = v.a[0];
	else
		emit_update(v);

	u.num = v;
}
