function
emit_update_fraction(u)
{
	var d, h, w;

	w = 1/2 * roman_width['n'.charCodeAt(0)] * WIDTH_RATIO;

	if (u.small_font) {
		h = SMALL_MINUS_HEIGHT + SMALL_STROKE_WIDTH;
		d = -SMALL_MINUS_HEIGHT;
		w = w * SMALL_FONT_SIZE;
	} else {
		h = MINUS_HEIGHT + STROKE_WIDTH;
		d = -MINUS_HEIGHT;
		w = w * FONT_SIZE;
	}

	u.height = u.num.height + u.num.depth + h;
	u.depth = u.den.height + u.den.depth + d;
	u.width = Math.max(u.num.width, u.den.width) + w;
}
