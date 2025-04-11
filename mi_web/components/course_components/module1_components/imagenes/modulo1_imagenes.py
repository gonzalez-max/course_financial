import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.course_styles as c_styles



def gif_que_son_finanzas() -> rx.Component:
    return rx.box(
        rx.image(
            src=("/que_son_finanzas.gif?refresh=1"),
            width="100%",
            max_width= "500px",
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
    








def image_el_ahorro() -> rx.Component:
    return rx.box(
        rx.center(
            rx.image(
            #height="200px",
            src=("/el_ahorro.jpg?refresh=1"),
            #width="100%",
            #max_width="200px"
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify="center",
        display="flex",
    )    
)


def image_identificacion_gastos() -> rx.Component:
    return rx.box(
        rx.image(
            src=("/identificacion_gastos.jpg?refresh=1"),
            **c_styles.IMAGE_STYLES
        ),
        align_items="center",
        justify_content="center"
    )
