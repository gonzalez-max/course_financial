import reflex as rx

def back_button(previous_url: str) -> rx.Component:
    return rx.box(
        rx.button(
            "← Atrás",
            on_click=lambda: rx.redirect(previous_url),  # Redirige a la página anterior
            background_color="black",
            color="white",
            padding="10px 20px",
            border_radius="50px",
            transition="all 0.3s ease-in-out",
            cursor="pointer",
            #border_color= "#6366F1",
            _hover={"background_color": "white",
                    "color":"black",
                    "box_shadow":"0px 4px 10px rgba(0, 0, 0, 1)",
                    "transform": "scale(1.05)"},# Cambio de color al pasar el mouse
        ),
        position="fixed",
        bottom="50px",  # Siempre al final de la pantalla
        left="20px",  # Alineado a la izquierda
    )
