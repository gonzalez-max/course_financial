import reflex as rx
import mi_web.styles.course_styles as c_styles
import mi_web.styles.styles as styles
from mi_web.components.links.links_modules import links_modules
from mi_web.styles.styles import Size as Size
from mi_web.components.general_components.nav_bar import navbar_dropdown
from mi_web.components.general_components.footer import footer


def choice_modules() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        rx.center(
            rx.vstack(
                rx.heading("Seccion de Modulos",
                           **c_styles.TEXT_STYLE["title"],
                           margin_top=Size.DEFAULT.value),
                links_modules(),   
            ),
        ),
        footer(),
        **c_styles.COURSE_STYLES
    ),


