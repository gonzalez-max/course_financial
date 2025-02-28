import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def image_f_versus_t() -> rx.Component:
    return rx.box(
        rx.image(
            height=Size.IMAGE_height,
            src=("/fundamental_vs_tecnico.jpg?refresh=1"),
            width="100%",
            max_width=Size.IMAGE_width,
            border_radius="20px"
        ),
        align_items="center",
        justify_content="center"
    )

