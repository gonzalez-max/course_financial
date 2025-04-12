import reflex as rx
import mi_web.styles.styles as styles
import mi_web.styles.course_styles as c_styles
from reflex_image_zoom import image_zoom

# Componente reutilizable para imágenes con zoom
def zoomed_image(src: str, height: str = "auto") -> rx.Component:
    return rx.vstack(
        image_zoom(
            rx.image(
                src=src,
                height=height,
                #width="100%",
                **c_styles.IMAGE_STYLES,  # Aplicamos los estilos aquí
            ),
            #width="100%"
            zoom_scale=50,  # Escala de zoom (ajustable)
            cursor="zoom-in",  # Indicador visual
        ),
    )
    

#________________USE IN PORTFOLIO_____________________________________#
def zoom_images(src: str, height: str = "auto") -> rx.Component:
    return rx.vstack(
        image_zoom(
            rx.image(
                src=src,
                height=height,
                #width="100%",
                **styles.PORTFOLIO_IMAGE_STYLES,  # Aplicamos los estilos aquí
            ),
            #width="100%"
            zoom_scale=50,  # Escala de zoom (ajustable)
            cursor="zoom-in",  # Indicador visual
        ),
    )
    