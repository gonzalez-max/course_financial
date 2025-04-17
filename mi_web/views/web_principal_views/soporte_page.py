import reflex as rx 
from mi_web.components.general_components.nav_bar import navbar_dropdown
from mi_web.components.general_components.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles


def soporte_page() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
    rx.vstack(
        rx.heading("Contacto web ",
                   font_size="50px",
                   margin_top=Size.REGULAR.value),
        contact_form(),
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            width="100%",
            border_radius="10px",
            align_items="center",
            justify_content="center",
            size="2",   
            max_width="800px",
    ),
    footer(),
    **styles.global_styles,
    background="linear-gradient(180deg, rgba(183,86,243,1) 0%, rgba(116,139,232,1) 52%, rgba(21,204,184,1) 100%)"
    )



















#____________________________FORM_____________________________________#




import reflex as rx
import httpx

class ContactFormState(rx.State):
    form_data: dict = {}
    message_sent: bool = False
    sending_error: bool = False
    error_message: str = ""
    submitted_once: bool = False  # ← Se activa solo cuando el usuario intenta enviar

    @rx.event
    def handle_submit(self, form_data: dict):
        self.submitted_once = True  # ← Marca que el usuario interactuó
        self.message_sent = False
        self.sending_error = False
        self.error_message = ""

        # Validación de campos vacíos
        if not form_data.get("name") or not form_data.get("email") or not form_data.get("subject") or not form_data.get("message"):
            self.error_message = "Todos los campos son obligatorios."
            return

        # Validación de formato de email
        if "@" not in form_data["email"]:
            self.error_message = "El correo electrónico no es válido."
            return

        self.form_data = form_data

        try:
            response = httpx.post(
                "https://formspree.io/f/mpwpnkzq",
                data=form_data,
                headers={"Accept": "application/json"},
                timeout=10.0,
            )

            if response.status_code == 200:
                self.message_sent = True
                self.error_message = ""
                self.submitted_once = False  # ← Reiniciamos para ocultar errores antiguos
            else:
                self.sending_error = True
                self.error_message = "Hubo un error al enviar el mensaje."
        except Exception:
            self.sending_error = True
            self.error_message = "Error al conectar con el servidor."

def contact_form():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.flex(
                    rx.card(
                        rx.input(placeholder="Nombre", name="name",color="white", is_required=True),
                        rx.input(placeholder="Correo electrónico", name="email", is_required=True),
                        rx.input(placeholder="Asunto", name="subject", is_required=True),
                        rx.text_area(placeholder="Mensaje", name="message", height="8em", is_required=True),
                        rx.button("Enviar", type="submit", **styles.form_button_style),
                        width="500px",
                        background_color="rgba(255, 255, 255, 0.3)",
                        variant="surface"
                    ),
                ),
            align_items="center",
            justify_content="center",
            max_width="500px",
            width="100%",
            margin_top=Size.BIG.value,
            margin_bottom=Size.DEFAULT.value
            ),
            on_submit=ContactFormState.handle_submit,
            reset_on_submit=True,
        ),

        # Mensaje de éxito
        rx.flex(
            rx.card(
                rx.cond(
                    ContactFormState.message_sent,
                    rx.text(
                        "Mensaje enviado con éxito",
                        position="top-right",
                        style={
                            "color": "black",
                            "font_size":"15px",
                            "font_weight":"400",
                            "align_items":"center",
                            "text_align":"center",
                            "justify_content":"center",
                            "max_width":"300px",
                            
                        },
                    ),
                ),
            background_color="rgba(0, 184, 49, 0.6)"),
            max_width="500px",
            width="100%",
            align_items="center",
            justify_content="center",
            margin_bottom=Size.REGULAR.value
        ),    

        # Mensaje de error solo si el usuario ya intentó enviar
        rx.flex(
            rx.card(
                rx.cond(
                    ContactFormState.submitted_once & (ContactFormState.error_message != ""),
                    rx.text(
                        ContactFormState.error_message,
                        color="red",
                        position="center",
                        style={
                            "color": "black",
                            "font_size":"15px",
                            "font_weight":"400",
                            "align_items":"center",
                            "text_align":"center",
                            "justify_content":"center",
                            "max_width":"300px",
                            },
                    ),
                ),
            ),
            background_color="rgba(255, 30, 0, 0.6)",
            max_width="500px",
            width="100%",
            align_items="center",
            justify_content="center",
            margin_bottom=Size.REGULAR.value
        ),
    )