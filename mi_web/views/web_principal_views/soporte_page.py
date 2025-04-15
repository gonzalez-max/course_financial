import reflex as rx 
from mi_web.components.general_components.nav_bar import navbar_dropdown
from mi_web.components.general_components.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles


def soporte_page() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
    rx.vstack(
        rx.heading("contacto web ",
                   **styles.text_main_page["title"],
                   margin_top="35px"),
        
            
            
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




import reflex as rx        # Importamos Reflex, el framework para construir la interfaz web
import httpx               # Importamos httpx para hacer peticiones HTTP (como a Formspree)


# Estado del formulario
class ContactFormState(rx.State):
    # Diccionario donde se guardan los datos del form
    form_data: dict = {}

    # Flags (banderas) para saber si se envió correctamente o hubo error
    message_sent: bool = False
    sending_error: bool = False

    # Mensaje de error personalizado
    error_message: str = ""

    # Evento que se ejecuta al enviar el formulario
    @rx.event
    def handle_submit(self, form_data: dict):
        # Reiniciamos los estados por si ya se envió antes
        self.message_sent = False
        self.sending_error = False
        self.error_message = ""

        # Validamos que todos los campos estén completos
        if not form_data.get("name") or not form_data.get("email") or not form_data.get("subject") or not form_data.get("message"):
            self.error_message = "Todos los campos son obligatorios."
            return  # Si falta alguno, se corta acá

        # Validamos que el email tenga "@"
        if "@" not in form_data["email"]:
            self.error_message = "El correo electrónico no es válido."
            return

        # Guardamos los datos localmente (por si querés mostrarlos luego)
        self.form_data = form_data

        # Intentamos enviar los datos a la API de Formspree
        try:
            response = httpx.post(
                "https://formspree.io/f/mpwpnkzq",  # ← Tu URL de Formspree
                data={
                    "name": form_data["name"],
                    "email": form_data["email"],
                    "subject": form_data["subject"],
                    "message": form_data["message"],
                },
                headers={"Accept": "application/json"},  # Pedimos una respuesta en JSON
                timeout=10.0,  # Tiempo máximo de espera
            )

            # Si todo salió bien (status 200)
            if response.status_code == 200:
                self.message_sent = True  # Indicamos que se envió con éxito
            else:
                self.sending_error = True  # Si no fue 200, hubo error
                self.error_message = "Hubo un error al enviar el mensaje."
        except Exception as e:
            self.sending_error = True
            self.error_message = "Error al conectar con el servidor."


# Parte visual del formulario
def contact_form():
    return rx.vstack(  # Un layout vertical (como una columna)
        rx.form(  # Formulario
            rx.vstack(  # Dentro del form, también todo en columna
                rx.input(placeholder="Nombre", name="name", is_required=True),  # Input de nombre
                rx.input(placeholder="Correo electrónico", name="email", is_required=True),  # Input de email
                rx.input(placeholder="Asunto", name="subject", is_required=True),  # Input de asunto
                rx.text_area(placeholder="Mensaje", name="message", height="8em", is_required=True),  # Textarea para el mensaje
                rx.button("Enviar", type="submit"),  # Botón para enviar el form
            ),
            on_submit=ContactFormState.handle_submit,  # Al enviar, llama a `handle_submit`
            reset_on_submit=True,  # Limpia los campos después de enviar
        ),

        # Si se envió bien, mostramos un mensaje de éxito en verde
        rx.cond(
            ContactFormState.message_sent,
            rx.text("Mensaje enviado con Exito",
                    color="green",
                    background_color="rgba(255, 255, 255, 0.5)"),
        ),

        # Si hay error, mostramos el mensaje en rojo
        rx.cond(
            ContactFormState.error_message != "",
            rx.text(ContactFormState.error_message, color="red"),
        )
    )



