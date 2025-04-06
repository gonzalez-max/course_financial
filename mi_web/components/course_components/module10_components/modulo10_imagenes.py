import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
import mi_web.styles.course_styles as c_styles


def gif_celebration() -> rx.Component:
    return rx.box(
        rx.image(
            src=("/celebration.gif?refresh=1"),
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