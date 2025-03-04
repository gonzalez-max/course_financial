import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def intro_image() -> rx.Component:
    return rx.box(
        rx.image(
            height="400px",
            src=("/intro_image.jpg?refresh=1"),
            width="100%",
            max_width=Size.IMAGE_width,
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
