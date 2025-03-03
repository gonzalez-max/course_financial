import reflex as rx

def next_button(next_url: str) -> rx.Component:
    return rx.box(
        rx.button(
            "Siguiente →",
            on_click=lambda: rx.redirect(next_url),  # Redirige a la siguiente página
            background_color="#ff3333",
            color="white",
            padding="10px 20px",
            border_radius="8px",
            _hover={"background_color": "#cc0000"},
            transition="all 0.3s ease-in-out",
            box_shadow= "0px 4px 10px rgba(79, 70, 229, 0.3)",
            border_color= "#6366F1",# Cambio de color al pasar el mouse
        ),
        position="fixed",
        bottom="20px",  # Siempre al final de la pantalla
        right="20px",  # Alineado a la derecha
    )
