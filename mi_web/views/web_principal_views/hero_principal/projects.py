import reflex as rx
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size
from mi_web.components.general_components.link_button import link_button


def projects() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(
                "Mis Proyectos",
                **styles.text_main_page["title"],
                color="white",
                font_size="50px",
                class_name="roboto-bold",
            ),
        ),
                    id="mis-proyectos",
                    align_items="center",
                    justify="center",
                    margin_top="40px",
    ),
    #**styles.main_page_styles
