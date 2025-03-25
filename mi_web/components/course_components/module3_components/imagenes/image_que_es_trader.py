import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def image_que_es_trader() -> rx.Component:
    return rx.box(
        rx.image(
            height="200px",
            src=("/que_es_trader.jpg?refresh=1"),
            width="100%",
            max_width="200px"
        ),
        align_items="center",
        justify_content="center"
    )
