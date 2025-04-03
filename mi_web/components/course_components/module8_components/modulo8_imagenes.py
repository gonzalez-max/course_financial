import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
import mi_web.styles.course_styles as c_styles


def gif_batman_pensando() -> rx.Component:
    return rx.box(
        rx.image(
            src=("/batman_pensando.gif?refresh=1"),
            width="100%",
            max_width= "600px",
            max_height= "400px",
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
    
    
    
    
def image_BTC() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/BTC.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
    
def image_ETH() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/ETH.jpg?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
def image_BNB() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/BNB.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
    
def image_ADA() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/ADA.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
    
def image_SOL() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/SOL.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )