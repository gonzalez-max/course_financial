import reflex as rx

def back_button(previous_url: str) -> rx.Component:
    return rx.box(
        rx.button(
            "← Atrás",
            on_click=lambda: rx.redirect(previous_url),  # Redirige a la página anterior
            background_color="#2d5986",
            color="white",
            padding="10px 20px",
            border_radius="8px",
            _hover={"background_color": "#4080bf"},# Cambio de color al pasar el mouse
            transition="all 0.3s ease-in-out",
            box_shadow= "0px 4px 10px rgba(79, 70, 229, 0.3)",
            border_color= "#6366F1",
        ),
        position="fixed",
        bottom="20px",  # Siempre al final de la pantalla
        left="20px",  # Alineado a la izquierda
    )
