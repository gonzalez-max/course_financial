import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def image_tipes_trading() -> rx.Component:
    return rx.box(
        rx.image(
            height=Size.IMAGE_height,
            src=("/tipos_trading.jpg?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

