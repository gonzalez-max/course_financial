import reflex as rx

def download_button() -> rx.Component:
    return rx.button(
        "Descargar CV",
        on_click=[lambda: rx.download("/Maximiliano Gonzalez.pdf"),
            rx.toast(
                "Cv Descargado Exitosamente",
                position="top-right",
                style={
                    "background_color":"rgba(255, 255, 255, 0.1)",
                    "color": "black",
                    "font-family":"Arial",
                    "weight":"bold",
                    "align_items":"center",
                    "box_shadow": "0 1px 3px rgba(0, 0, 0, 0.2)",
                    "border": "1px solid green",
                    "border-radius": "0.53m",}
                ),
        ],
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
    