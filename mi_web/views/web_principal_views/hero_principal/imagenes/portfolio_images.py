import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
import mi_web.styles.course_styles as c_styles

def image_landing_course() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/landing_course.png"),
            width="100%",
            **styles.PORTFOLIO_IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )
    
def image_seccion_modulos() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/seccion_modulos.png"),
            width="100%",
            **styles.PORTFOLIO_IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )

def image_captura1_modulos() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/captura1_modulos.png"),
            width="100%",
            **styles.PORTFOLIO_IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )
    
def image_captura2_modulos() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/captura2_modulos.png"),
            width="100%",
            **styles.PORTFOLIO_IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )
    
def image_captura3_modulos() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/captura3_modulos.png"),
            width="100%",
            **styles.PORTFOLIO_IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )
    
def image_captura4_modulos() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/captura4_modulos.png"),
            width="100%",
            **styles.PORTFOLIO_IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )