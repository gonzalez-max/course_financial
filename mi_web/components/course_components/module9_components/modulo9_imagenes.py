import reflex as rx
from mi_web.styles.course_styles import Size as Size
import mi_web.styles.course_styles as styles
import mi_web.styles.course_styles as c_styles


def gif_mercado_estafa() -> rx.Component:
    return rx.box(
        rx.image(
            src=("/mercado_estafa.gif?refresh=1"),
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
    
    
    
    
def image_estafa_1() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/estafa_1.jpg?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )

def image_estafa_2() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/estafa_2.jpg?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES,
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )

def image_estafa_3() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/estafa_3.jpg?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )

def image_estafa_4() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/estafa_4.jpg?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )
    
#___________________________________________________________________________#

def image_prueba_estafa1() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/prueba_estafa1.jpg?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )
    
def image_prueba_estafa2() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/prueba_estafa2.jpg?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )

def image_prueba_estafa3() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/prueba_estafa3.jpg?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )
#_____________________________________________________________________________#    

def image_esquema_ponzi() -> rx.Component:
    return rx.box(
        rx.image(
            height="350px",
            src=("/esquema_ponzi.png?refresh=1"),
            width="100%",
            **c_styles.IMAGE_STYLES
        ),
        justify_content="center",  # Centra horizontalmente
        align_items="center",  # Centra verticalmente
        width="100%",  # Asegura que el contenedor ocupe toda la pantalla
        height="100%",
    )