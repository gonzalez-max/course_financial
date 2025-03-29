import reflex as rx

def next_button(next_url: str) -> rx.Component:
    return rx.box(
        rx.button(
            "Siguiente →",
            on_click=lambda: rx.redirect(next_url),  # Redirige a la siguiente página
            background_color="white",
            color="black",
            padding="10px 20px",
            border_radius="50px",
            transition="all 0.3s ease-in-out",
            #border= "2px solid #e28cac",# Cambio de color al pasar el mouse
            _hover={"background_color": "black",
                    "color":"white",
                    "box_shadow":"0px 4px 10px rgba(0, 0, 0, 1)",
                    "transform": "scale(1.05)"},
        ),
        position="fixed",
        bottom="20px",  # Siempre al final de la pantalla
        right="20px",  # Alineado a la derecha
    )
