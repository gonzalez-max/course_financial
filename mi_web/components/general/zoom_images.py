import reflex as rx
import mi_web.styles.styles as styles
from reflex_image_zoom import image_zoom

# Componente reutilizable para imágenes con zoom
def zoomed_image(src: str, height: str = "350px") -> rx.Component:
    return rx.vstack(
        image_zoom(
            rx.image(
                src=src,
                height=height,
                width="100%",
                **styles.IMAGE_STYLES,  # Aplicamos los estilos aquí
            ),
            width="600px",  # Tamaño del contenedor de zoom
            zoom_scale=50,  # Escala de zoom (ajustable)
            cursor="zoom-in",  # Indicador visual
        ),
    )