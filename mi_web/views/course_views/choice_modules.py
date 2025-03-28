import reflex as rx
import mi_web.styles.course_styles as c_styles
import mi_web.styles.styles as styles
from mi_web.components.course_components.links_course.links_modules import links_modules
from mi_web.styles.styles import Size as Size
from mi_web.components.course_components.links_course.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer



def choice_modules() -> rx.Component:
    return rx.box(
        navbar_course(),
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
        **c_styles.STYLES_CHOICE_MODULES,
    ),


