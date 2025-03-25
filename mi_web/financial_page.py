import reflex as rx
from mi_web.components.general_components.nav_bar import navbar_dropdown
from mi_web.components.general_components.footer import footer
from mi_web.views.hero_section.financial_hero_section.financial_hero import financial_hero
import mi_web.styles.course_styles as c_styles
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size


# Página principal de Finanzas
def financial_page() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        rx.center(
            rx.vstack(
                financial_hero(),
            )
        ),
        footer(),
        **c_styles.COURSE_STYLES
        
    )
