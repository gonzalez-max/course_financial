import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
import mi_web.styles.course_styles as c_styles

def image_identificacion_gastos() -> rx.Component:
    return rx.box(
        rx.image(
            src=("/identificacion_gastos.jpg?refresh=1"),
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
