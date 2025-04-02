import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
import mi_web.styles.course_styles as c_styles

def image_konkorde_ejemplo() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/konkorde_ejemplo.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_rsi_ejemplo() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/rsi_ejemplo.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_medias_moviles_ejemplo() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/medias_moviles_ejemplo.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
    
def image_ruptura_soporte_volumen() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/ruptura_soporte_volumen.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_entrada_canal_alcista() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/entrada_canal_alcista.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_salida_canal_alcista() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/salida_canal_alcista.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_death_cross_bajista() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/death_cross_bajista.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_ruptura_resistencia_volumen() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/ruptura_resistencia_volumen.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def image_golden_cross_alcista() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/golden_cross_alcista.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )

def gif_los_indicadores() -> rx.Component:
    return rx.box(
        rx.image(
            src=("/los_indicadores.gif?refresh=1"),
            width="100%",
            max_width= "600px",
            max_height= "388px",
            object_fit= "cover",  # Evita deformaciones

            border = "0.1px solid white", #color de bordes normales
            border_radius = "20px", #forma de los bordes
            display="block",  # Asegura que el margin auto funcione
            margin="auto"  #
        ),
        align_items="center",
        display="flex",
        justify="center",
        width="100%",
        height="100%", 
    )