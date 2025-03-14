import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def image_ruptura_resistencia() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/ruptura_resistencia.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
