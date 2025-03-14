import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def image1_importancia_lineas() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/importancia_lineas_1.png.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
