function
emit_roman_text(u, s, small_font)
{
	var v = {type:ROMAN, s:s, small_font:small_font};

	if (small_font) {
		v.height = SMALL_FONT_HEIGHT;
		v.depth = SMALL_FONT_DEPTH;
		v.width = s.length * SMALL_FONT_WIDTH;
	} else {
		v.height = FONT_HEIGHT;
		v.depth = FONT_DEPTH;
		v.width = s.length * FONT_WIDTH;
	}

	u.a.push(v);
}
