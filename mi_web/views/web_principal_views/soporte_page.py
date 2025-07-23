import reflex as rx 
from mi_web.components.general_components.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.styles.course_styles import Size as Size
import mi_web.styles.course_styles as c_styles


def soporte_page() -> rx.Component:
    return rx.box(
            navbar_course(),
            rx.vstack(
                    rx.heading("¡¡ Contactáme !!",
                        **c_styles.TEXT_STYLE["title"],
                        margin_top=Size.REGULAR.value),

                    rx.tablet_and_desktop(contact_form()),
                    rx.mobile_only(contact_form_mobile()),
                width="100%",
                border_radius="10px",
                align_items="center",
                justify_content="center",
                size="2",   
            ),
            footer(),
            **c_styles.global_styles,
            background="radial-gradient(circle,rgba(117, 55, 153, 1) 0%, rgba(80, 98, 163, 1) 51%, rgba(28, 115, 166, 1) 100%)"
    ),

















#____________________________FORM_____________________________________#




import reflex as rx
import httpx

class ContactFormState(rx.State):
    async def handle_submit(self, form_data: dict):
        """Handle the form submission."""
        # Validación de campos vacíos
        if not all(form_data.get(key) for key in ["name", "email", "subject", "message"]):
            return rx.toast("❌ Todos los campos son obligatorios.")

        # Validación de formato de email
        if "@" not in form_data["email"]:
            return rx.toast("❌ El correo electrónico no es válido.")

        # Envío a Formspree
        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    "https://formspree.io/f/mpwpnkzq",
                    data=form_data,
                    headers={"Accept": "application/json"},
                    timeout=10.0,
                )
                response.raise_for_status()
                return rx.toast("✔️ Mensaje enviado con éxito")
        except Exception:
            return rx.toast("⚠️ Error al enviar el mensaje")

def contact_form():
    return rx.tablet_and_desktop(
    rx.vstack(
        rx.form(
            rx.vstack(
                rx.flex(
                    rx.card(
                        rx.input(placeholder="Nombre", name="name", color="white", is_required=True),
                        rx.input(placeholder="Correo electrónico", name="email", is_required=True),
                        rx.input(placeholder="Asunto", name="subject", is_required=True),
                        rx.text_area(placeholder="Mensaje", name="message", height="8em", is_required=True),
                        rx.button("Enviar", type="submit", **c_styles.form_button_style),
                        width="600px",
                        background_color="rgba(255, 255, 255, 0.3)",
                        variant="surface"
                    ),
                ),
                align_items="center",
                justify_content="center",
                max_width="600px",
                width="100%",
                margin_top=Size.BIG.value,
                margin_bottom=Size.DEFAULT.value
            ),
            on_submit=ContactFormState.handle_submit,
            reset_on_submit=True,
        ),
    )
    )

def contact_form_mobile():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.flex(
                    rx.card(
                        rx.input(placeholder="Nombre", name="name", color="white", is_required=True),
                        rx.input(placeholder="Correo electrónico", name="email", is_required=True),
                        rx.input(placeholder="Asunto", name="subject", is_required=True),
                        rx.text_area(placeholder="Mensaje", name="message", height="8em", is_required=True),
                        rx.button("Enviar", type="submit", **c_styles.form_button_style),
                        width="300px",
                        background_color="rgba(255, 255, 255, 0.3)",
                        variant="surface"
                    ),
                ),
                align_items="center",
                justify_content="center",
                max_width="450px",
                width="100%",
                margin_top=Size.BIG.value,
                margin_bottom=Size.DEFAULT.value
            ),
            on_submit=ContactFormState.handle_submit,
            reset_on_submit=True,
        ),
    )

