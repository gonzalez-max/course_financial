import reflex as rx
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size
from mi_web.components.general_components.link_button import link_button


def education() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(
                "Formacion/Educacion",
                **styles.text_main_page["title"],
                color="white",
                font_size="50px",
                class_name="roboto-bold",
            ),
            width="100%",
            border_radius="10px",
            align_items="center",
            justify_content="center",
            size="2",
        ),

    **styles.global_styles
    ),
    