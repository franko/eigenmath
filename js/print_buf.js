const BLACK = 1;
const BLUE = 2;
const RED = 3;

function
print_buf(s, color)
{
	s = s.replace(/&/g, "&amp;");
	s = s.replace(/</g, "&lt;");
	s = s.replace(/>/g, "&gt;");
	s = s.replace(/\n/g, "<br>");

	switch (color) {

	case BLACK:
		s = "<p><span style='color:black'>" + s + "</span></p>";
		break;

	case BLUE:
		s = "<p><span style='color:blue;font-family:courier'>" + s + "</span></p>";
		break;

	case RED:
		s = "<p><span style='color:red;font-family:courier'>" + s + "</span></p>";
		break;
	}

	stdout.innerHTML += s;
}
