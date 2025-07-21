import reflex as rx
import mi_web.styles.styles as styles
def link_button(url: str, image: str) -> rx.Component:
    return rx.link(
        rx.box(
            rx.image(
                src=image,  
                width="35px",
                height="35px",
                object_fit="contain",
                display="block"
            ),
            **styles.LINK_BUTTON_STYLES
        ),
        href=url,
        target="_blank"  # Abre en una nueva pestaña
    )

def link_email(image:str) -> rx.Component:
    return rx.box(
            rx.image(
                src=image,  
                width="35px",
                height="40px",
                object_fit="contain",
                display="block"
            ),
            **styles.LINK_BUTTON_STYLES
        ),
        