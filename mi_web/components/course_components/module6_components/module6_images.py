import reflex as rx
from mi_web.styles.course_styles import Size as Size
import mi_web.styles.course_styles as styles

def image_enemigo_tendencias() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/enemigo_tendencias.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_falsa_ruptura() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/falsa_ruptura.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_ruptura_patron_tecnico() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/ruptura_patron_tecnico.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_ruptura_resistencia() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/ruptura_resistencia.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_ruptura_soporte() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/ruptura_soporte.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_stop_loss() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/stop-loss.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_tendencia_alcista_bajista() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/tendencia_alcista_bajista.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_velocidad_de_las_tendencias() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/velocidad_de_las_tendencias.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )