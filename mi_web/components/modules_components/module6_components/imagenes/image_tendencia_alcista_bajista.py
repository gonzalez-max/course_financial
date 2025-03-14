import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def image_tendencia_alcista_bajista() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/tendencia_alcista_bajista.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
