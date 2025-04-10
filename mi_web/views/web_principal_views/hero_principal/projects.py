import reflex as rx
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size
from mi_web.components.general_components.link_button import link_button


def projects() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(
                " Proyectos",
                **styles.text_main_page["title"],
            ),
        margin_bottom=Size.MASSIVE.value
        ),
                    id="mis-proyectos",
                    justify="center",
                    
    **styles.global_styles
    ),
    
