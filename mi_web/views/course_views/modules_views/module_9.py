import reflex as rx
from mi_web.components.course_components.links_course.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
import mi_web.styles.course_styles as c_styles
from mi_web.components.course_components.links_course.next_button import next_button
from mi_web.components.course_components.links_course.back_button import back_button
from mi_web.components.general_components.zoom_images import zoomed_image
from mi_web.components.course_components.module7_components.module7_table import table1_module7
from mi_web.components.course_components.module7_components.module7_table import mobile_table1_module7
from mi_web.components.course_components.module8_components.modulo8_imagenes import gif_batman_pensando





def module_9() -> rx.Component:
    return rx.box(
        navbar_course(),
        rx.center( 
            rx.vstack(
                rx.box(
                        rx.heading("modulo 9: ",
                                   **c_styles.TEXT_STYLE["title"]),
                    
                    
                    
                #_____________________________________________________________________________________#   
                ),
                width="100%",
                border_radius="10px",
                align_items="center",
                justify_content="center",
                max_width="600px",
                size="2" 
                ),
        ),
        back_button("/module_8"),
        #next_button("/module_8"),
        footer(),
        **c_styles.COURSE_STYLES
    )
