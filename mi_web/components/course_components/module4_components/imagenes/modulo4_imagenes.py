import reflex as rx
from mi_web.styles.course_styles import Size as Size
import mi_web.styles.course_styles as styles

def image_ciclo_del_precio() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/ciclo_del_precio.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_identificar_tendencias() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/identificar_tendencias.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_sentido_comun() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/sentido_comun.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_soporte_resistencia() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/soporte_resistencia.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_trazando_soporte_resistencia() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/trazando_soporte_resistencia.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
