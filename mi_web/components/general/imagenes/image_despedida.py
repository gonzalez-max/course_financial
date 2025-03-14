import reflex as rx
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles

def image_despedida() -> rx.Component:
    return rx.box(
        rx.image(
            height="200px",
            src=("/despedida.gif?refresh=1"),
            width="100%",
            max_width="200px"
        ),
        align_items="center",
        justify_content="center",
        position="absolute",  # Mantiene la imagen al ultimo de la pagina
        bottom="80px",        # Ajusta este valor para que quede por debajo del nav_bar (por ejemplo, 80px si el nav_bar tiene 60px de altura + un margen)
        left="20px",       # Mantiene la distancia desde la izquierda
    )
