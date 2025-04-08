import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def fci_image() -> rx.Component:
    return rx.box(
        rx.image(
            src=("/fci_image.jpg?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_tipo_inversor() -> rx.Component:
    return rx.box(
        rx.image(
            src=("/tipo_inversor.jpg?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_diferencia_fija_variable() -> rx.Component:
    return rx.box(
        rx.image(
            height="200px",
            src=("/diferencia_fija_variable.jpg?refresh=1"),
            width="100%",
            max_width="200px"
        ),
        align_items="center",
        justify_content="center"
    )

def image_intrumentos_inversion() -> rx.Component:
    return rx.box(
        rx.image(
            height="200px",
            src=("/instrumentos_inversion.jpg?refresh=1"),
            width="100%",
            max_width="200px"
        ),
        align_items="center",
        justify_content="center"
    )
