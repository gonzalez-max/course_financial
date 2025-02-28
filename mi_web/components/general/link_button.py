import reflex as rx
import mi_web.styles.styles as styles

def link_button(title: str,body: str, url: str) -> rx.Component:
    return rx.link(
        rx.vstack(
            rx.button(
                rx.text(title,"text"),
                rx.text(body,"text"),
                align_items="center",
                width="200px",  # Ajusta el ancho del botón
                height="50px",  # Ajusta la altura del botón
                padding="10px",  # Ajusta el padding interno
                font_size="18px",
                size="3",
                variant="ghost"
            )
        ),
        href=url,
        is_external=True,
        max_width="900px",     
 ) 
