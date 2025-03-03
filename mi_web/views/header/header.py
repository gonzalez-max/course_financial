import reflex as rx
from mi_web.styles.styles import global_styles

def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(src="/mi-foto-cara.jpg",fallback="MG",size="8",name="Maxi Gonzalez"),
        rx.text("@Maxgonzalez_ok", color="white",size="3"),
        rx.heading("Bienvenidos a mi Proyecto Web",color="white",size="6"),
        rx.text("""Soy Maxi González, Programador en HTML, CSS y Python (Django framework, Reflex), Asesor financiero y agente
                productor, me encuentro creando un curso gratuito de trading donde encontraras lo mas importante para invertir
                en la bolsa, cripto y como evitar estafas.""",color="white",size="3",align="center",),  
        align="center",
        max_width=("400px"),
        align_items="center",
        top="80px"

    )
