import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def image_vela_verde_contra_roja() -> rx.Component:
    return rx.box(
        rx.image(
            height="300px",
            src=("/vela_verde_contra_roja.jpg?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
