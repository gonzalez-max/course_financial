import reflex as rx
from mi_web.styles.course_styles import Size as Size
import mi_web.styles.course_styles as c_styles

def gif_intro() -> rx.Component:
    return rx.tablet_and_desktop(
                rx.box(
                    rx.center(
                        rx.image(
                            src=("/gif_intro.png"),
                            width="600px",
                            max_width= "600px",
                            max_height="400px",
                            object_fit= "cover",
                            background_color= "#99003d",
                            color = "#333333",
                            border = "0.1px solid white", #color de bordes normales
                            border_radius = "20px", #forma de los bordes
                        ),
                    align_items="center",
                    justify_content="center",   
                    width="100%",
                    margin_top="50px"
                )
            )
)
    
def gif_intro_mobile() -> rx.Component:
    return rx.mobile_only(
                rx.box(
                    rx.center(
                        rx.image(
                            src=("/gif_intro.png"),
                            width="100%",
                            max_width= "350px",
                            min_width="250px",
                            object_fit= "cover",
                            background_color= "#99003d",
                            color = "#333333",
                            border = "0.1px solid white", #color de bordes normales
                            border_radius = "20px", #forma de los bordes
                        ),
                    align_items="center",
                    justify_content="center",
                    flex_direction="column",
                    width="100%",
                    margin_top="50px"
                )
            )
)