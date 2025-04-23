import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.course_styles as c_styles

def image_intro() -> rx.Component:
    return rx.desktop_only(
                rx.box(
                    rx.center(
                        rx.image(
                            src=("/intro_image.jpg?refresh=1"),
                            width="600px",
                            max_width= "600px",
                            max_height="400px",
                            object_fit= "cover",  # Evita deformaciones
                            background_color= "#99003d",
                            color = "#333333",
                            #border = "0.1px solid white", #color de bordes normales
                            border_radius = "20px", #forma de los bordes
                        ),
                    align_items="center",
                    justify_content="center",
                    width="100%",
                    margin_top="50px"
                )
            )
)