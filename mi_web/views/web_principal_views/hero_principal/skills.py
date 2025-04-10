import reflex as rx
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size
from mi_web.components.general_components.link_button import link_button


def skills() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.box(
                rx.heading(
                " Habilidades",
                **styles.text_main_page["title"],
                margin_bottom=Size.DEFAULT.value,
                color="white"
            ),
            rx.flex(
                rx.card("Python", **styles.MINI_CARDS_STYLES),
                rx.card("HTML",**styles.MINI_CARDS_STYLES),
                rx.card("CSS",**styles.MINI_CARDS_STYLES),
                rx.card("Javascript (Basico)",**styles.MINI_CARDS_STYLES),
                rx.card("Django (framework de backend)",**styles.MINI_CARDS_STYLES),
                rx.card("Reflex (framework frontend y backend)",**styles.MINI_CARDS_STYLES),
                rx.card("Git", **styles.MINI_CARDS_STYLES),
                rx.card("SQLite",**styles.MINI_CARDS_STYLES),
                rx.card("MySQL",**styles.MINI_CARDS_STYLES),
                spacing="2",
                align_items="flex-start",
                justify_content="center",
                flex_wrap="wrap",
                variant="surface"
                #max_width="600px",
            )
                ),
                width="100%",
                border_radius="10px",
                align_items="center",
                justify_content="center",
                size="2",
                max_width="600px",
                margin_bottom=Size.MASSIVE.value
        ),           
    **styles.global_styles
    ),