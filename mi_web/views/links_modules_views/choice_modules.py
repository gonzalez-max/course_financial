import reflex as rx
import mi_web.styles.course_styles as c_styles
import mi_web.styles.styles as styles
from mi_web.components.course_components.links_course.links_modules import links_modules
from mi_web.styles.styles import Size as Size
from mi_web.components.course_components.links_course.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.components.course_components.links_course.main_menu import main_menu

def choice_modules() -> rx.Component:
    return rx.box(
        navbar_course(),
        main_menu("/financial_page"),
        rx.center(
            rx.vstack(
                rx.heading("Sección de Módulos",
                           **c_styles.TEXT_STYLE["title"],
                           margin_top=Size.DEFAULT.value
                        ),
                links_modules(),   
            ),
        ),
        footer(),
        **c_styles.COURSE_STYLES,
    ),


