import reflex as rx
from mi_web.components.course_components.links_course.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.views.course_views.financial_body.financial_body import financial_body
import mi_web.styles.course_styles as c_styles
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size


# Página principal de Finanzas
def financial_page() -> rx.Component:
    return rx.box(
        navbar_course(),
        rx.center(
            rx.vstack(
                financial_body(),
            )
        ),
        footer(),
        **c_styles.COURSE_STYLES
        
    )
