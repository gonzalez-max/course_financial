import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def image_lineas_de_tendencia() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/lineas_de_tendencia.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_negociar_rangos() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/negociar_rangos.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_otras_ideas() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/otras_ideas.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
    
def image_rangos_acumulacion_distribucion() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/rangos_acumulacion_distribucion.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_riesgo_ganancias_lineas() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/riesgo_ganancias_lineas.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

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

def image2_soporte_resistencia() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/importancia_lineas_2.png?refresh=1"),
            width="100%",
            **styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
