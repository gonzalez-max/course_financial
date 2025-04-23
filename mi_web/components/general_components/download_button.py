import reflex as rx

def download_button() -> rx.Component:
    return rx.button(
        "Descargar CV",
        on_click=[lambda: rx.download("/Profesional Maximiliano Gonzalez.pdf"),
            rx.toast(
                "✔️ Cv Descargado Exitosamente",
                position="top-right",
                style={
                    "color": "white",
                    "font-family":"Arial",
                    "weight":"bold",
                    "align_items":"center",
                    "border_radius": "1px",
                    }
                ),
        ],
        background_color="#2A3C80",
        color="white",
        padding="10px 20px",
        border_radius="15px",
        display="flex",
        cursor="pointer",
        align_item="center",
        justify_content="center",
        margin="1px",
        _hover={"background_color": "white",
                "transition": "transform 0.2s ease-in-out",
                "color":"#2A3C80",
                "transform": "scale(1.07)"}
    )
    