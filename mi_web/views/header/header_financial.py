import reflex as rx
import mi_web.styles.styles as styles
def header_financial() -> rx.Component:
    return rx.box(
        rx.center(
        rx.heading("Bienvenidos al curso de Trading",**styles.TEXT_STYLE["title"])),
    rx.vstack(
            rx.heading("Introduccion y Objetivos del curso.",**styles.TEXT_STYLE["subtitle"]),
            rx.text("En este curso aprenderas desde lo mas basico hasta lo mas avanzado" 
                    " Enseñar conceptos clave de finanzas personales, trading y análisis técnico"
                    ", mientras se advierte sobre fraudes en el mundo financiero y se ofrecen herramientas para evitarlos.",
                    **styles.TEXT_STYLE["body"]),
            margin_y="50px",
            margin_x="3px",
            width="100%",
            border_radius="10px",
            align="center",
            flex_direction=["row", "column"]
            )),
