import reflex as rx

def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="/orbesdmc.png?refresh=1",
                    width="50px",
                    height="50px",
                    background_color="black",),
        rx.text("since 1999 copyright registered.",color="white"),
        align_items="center",
        )