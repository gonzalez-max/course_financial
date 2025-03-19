import reflex as rx
import mi_web.styles.course_styles as c_styles
import mi_web.styles.styles as styles
from mi_web.views.hero_section.financial_hero_section.hero_images.intro_image import intro_image




def hero_section_financial() -> rx.Component:
    return rx.box(
        rx.center(
            rx.vstack(
            rx.heading("Bienvenidos al curso de Trading",**c_styles.TEXT_STYLE["title"]),
        intro_image(),
        align_items="center",
        margin_top="0"
        )),
    rx.vstack(
            rx.heading("Introduccion y Objetivos del curso.",**c_styles.TEXT_STYLE["subtitle"]),
            rx.text("En este curso aprenderas desde lo mas basico hasta lo mas avanzado" 
                    " Enseñar conceptos clave de finanzas personales, trading y análisis técnico"
                    ", mientras se advierte sobre fraudes en el mundo financiero y se ofrecen herramientas para evitarlos.",
                    **c_styles.TEXT_STYLE["body"]),
            margin_y="50px",
            margin_x="3px",
            width="100%",
            border_radius="10px",
            align="center",
            )),
