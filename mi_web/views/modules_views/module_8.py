import reflex as rx
from mi_web.components.general.nav_bar import navbar_dropdown
from mi_web.components.general.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
from mi_web.components.general.drawer import drawer
from mi_web.views.links.next_button import next_button
from mi_web.views.links.back_button import back_button
from mi_web.components.general.zoom_images import zoomed_image




def module_8() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        drawer(),
        rx.center( 
            rx.vstack(
                rx.box(

                #_____________________________________________________________________________________#   
                ),
                max_width="600px",
                width="100%",
                margin_y=Size.SMALL.value,
                align_items="center",   
                ),
        ),
        back_button("/module_4"),
        footer(),
        background_color="black"
    )
