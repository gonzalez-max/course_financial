import reflex as rx

def main_menu(previous_url: str) -> rx.Component:
    return rx.box(
        rx.button(
            "← Pagina Pricipal ",
            on_click=lambda: rx.redirect(previous_url),  # Redirige a la siguiente página
            background_color="#990033",
            color="white",
            padding="10px 20px",
            border_radius="8px",
            _hover={"background_color": "#4338CA",
                    "box_shadow":"0px 4px 10px rgba(79, 70, 229, 0.3)",},
            transition="all 0.3s ease-in-out",
            border= "#6366F1",# Cambio de color al pasar el mouse
        ),
        position="fixed",  # Mantiene el botón fijo en la pantalla
        top="50px",        # Ajusta este valor para que quede por debajo del nav_bar (por ejemplo, 80px si el nav_bar tiene 60px de altura + un margen)
        left="15px",       # Mantiene la distancia desde la izquierda
        z_index="5",    # Asegura que el botón esté por debajo del nav_bar si este tiene un z_index mayor
    )
