import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def image_identificacion_gastos() -> rx.Component:
    return rx.box(
        rx.image(
            height="200px",
            src=("/identificacion_gastos.jpg?refresh=1"),
            width="100%",
            max_width="200px"
        ),
        align_items="center",
        justify_content="center"
    )
