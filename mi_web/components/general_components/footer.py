import reflex as rx

class LogoState(rx.State):
    click_count: int = 0
    logo_src: str = "/icons/orbesdmc-black.png"

    def increment_click(self):
        self.click_count += 1
        # Calcula el número de ciclos de 5 clics
        cycle = (self.click_count // 5) % 2
        # Alterna la imagen según el ciclo
        if cycle == 1:
            self.logo_src = "/icons/orbesdmc.png"
        else:
            self.logo_src = "/icons/orbesdmc-black.png"




def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src=LogoState.logo_src,
                    width="50px",
                    height="50px",
                    background_color="transparent",
                    on_click=LogoState.increment_click,# Vinculamos el evento on_click
                    cursor="pointer",
                     _hover={"transform": "scale(1.10)"}
                ),
        
        rx.text("since 1999 copyright registered.",
                color="white"),
        
        align_items="center",
        width="100%",
        justify_content="center",
        background_color="transparent",
        display= "flex",
        flex_wrap= "wrap",
        gap= "10px",
        )