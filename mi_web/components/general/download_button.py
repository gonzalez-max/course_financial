import reflex as rx

def download_button() -> rx.Component:
    return rx.button(
        "Descargar CV",
        on_click=lambda: rx.download("/Maximiliano Gonzalez.pdf"),
        background_color="#2A3C80",
        color="white",
        padding="10px 20px",
        border_radius="5px",
        cursor="pointer",
        _hover={"background_color": "white",
                "transition": "transform 0.2s ease-in-out",
                "color":"#2A3C80",
                "transform": "scale(1.07)"}
    )