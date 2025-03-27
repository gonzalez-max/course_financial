import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.course_styles as c_styles

def intro_image() -> rx.Component:
    return rx.box(
        rx.link(
            rx.tooltip(
                rx.image(
                
                src=("/intro_image.jpg?refresh=1"),
                **c_styles.IMAGE_STYLES
                
                ),
            content="Click aquí para empezar"),
            href="/choice_modules",  # URL de destino
            is_external=False),
            
        align_items="center",
        justify_content="center",
    )
