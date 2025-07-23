import reflex as rx
import mi_web.styles.course_styles as c_styles
from mi_web.components.general_components.zoom_images import zoomed_image
from mi_web.views.course_views.financial_body.intro_video import gif_intro
from mi_web.views.course_views.financial_body.intro_video import gif_intro_mobile
from mi_web.styles.course_styles import Size as Size



def financial_body() -> rx.Component:
    return rx.box(
        rx.center(
            rx.vstack(
                rx.box(
                        rx.hstack(
                                rx.vstack(
                                        rx.heading("Curso de Finanzas, Trading y como evitar"
                                                " Estafas",
                                                font_style="normal",
                                                text_align= "center",
                                                align_items="center",
                                                letter_spacing= "1px",
                                                text_wrap="normal",
                                                margin= "auto",
                                                display="flex",
                                                font_size="50px",
                                                class_name="roboto-bold",
                                                justify_content="center",
                                                line_height= "1.1"
                                        ),
                                        gif_intro_mobile(),
                                        
                                        rx.link(
                                                rx.button("Comenzar con el curso",
                                                        on_click=lambda: rx.redirect("/choice_modules"), 
                                                        is_external=False,
                                                        **c_styles.BUTTON_STYLE,
                                                        margin_top=Size.DEFAULT.value
                                                ),
                                        ),
                                        align_items="center"   
                                ),
                                
                                gif_intro(),
                                align_items="center",
                                justify_content="right",             
                        ),
                max_width="100%",
                width="100%",
                padding="20px",
                margin_top=Size.REGULAR.value,
                margin_bottom=Size.BIG.value,
                ),
                
                
                rx.heading("Introduccion",
                        **c_styles.TEXT_STYLE["subtitle"],
                        margin_top=Size.MEDIUM.value,
                ),
            
                rx.text("Te damos la bienvenida al curso de Inversiones Trading y como evitar estafas"
                        ", diseñado para brindarte un conocimiento sólido y práctico sobre el mundo "
                        "financiero. A lo largo de este curso, aprenderás desde los conceptos más "
                        "básicos hasta estrategias avanzadas de inversión, con un enfoque especial en "
                        "cómo reconocer y evitar fraudes financieros.",
                        **c_styles.TEXT_STYLE["body"]
                ),
                
                rx.heading("¿Qué aprenderás en este curso?",
                       **c_styles.TEXT_STYLE["subtitle"],
                       margin_top=Size.MEDIUM.value
                ),
                rx.list.ordered(
                    rx.list.item("Fundamentos de finanzas personales: administración del dinero, ahorro e inversión."
                                , margin_bottom=Size.MEDIUM.value),
                    rx.list.item("Principios básicos y avanzados de trading y análisis técnico."
                                , margin_bottom=Size.MEDIUM.value),
                    rx.list.item("Identificación de fraudes y estafas financieras más comunes."
                                , margin_bottom=Size.MEDIUM.value),
                    rx.list.item(" Herramientas y estrategias para proteger tu capital y tomar decisiones informadas."
                                , margin_bottom=Size.MEDIUM.value),
                        list_style_type="disc",
                        **c_styles.TEXT_STYLE["body"],
                        margin_bottom=Size.MEDIUM.value,
                ),
                
                rx.heading("¿Por qué tomar este curso?",
                       **c_styles.TEXT_STYLE["subtitle"],
                       margin_top=Size.MEDIUM.value
                ),
                rx.text("En un mundo donde las oportunidades financieras crecen, también lo hacen los "
                        "riesgos. Este curso te proporcionará conocimientos prácticos y casos reales "
                        "para que puedas invertir con confianza y seguridad.",
                        **c_styles.TEXT_STYLE["body"],
                        margin_top=Size.MEDIUM.value
                ),

                rx.heading("Seis Puntos a tener en cuenta",
                        **c_styles.TEXT_STYLE["subtitle"],
                        margin_top=Size.MEDIUM.value
                ),
                
                rx.box(        
                       rx.vstack(
                            rx.heading("1. Organiza tu tiempo",
                                    **c_styles.TEXT_STYLE["subseccion"],
                                    margin_top=Size.MEDIUM.value
                            ),

                            rx.text("El curso está diseñado para darte conocimientos desde lo básico "
                                    "hasta lo avanzado, por lo que es importante que asignes tiempo cada "
                                    "semana para aprender, practicar y repasar los contenidos.",
                                    **c_styles.TEXT_STYLE["body"]
                                    ),

                            rx.heading("2. Ten una libreta de apuntes",
                                    **c_styles.TEXT_STYLE["subseccion"],
                                    margin_top=Size.MEDIUM.value),
                            
                            rx.text("Aunque sea un curso digital, es fundamental tomar notas de los "
                                    "conceptos clave. Esto te ayudará a recordar información importante "
                                    "y a estructurar mejor tu aprendizaje.",
                                    **c_styles.TEXT_STYLE["body"]
                                    ),

                            rx.heading("3. Sé crítico con la información",
                                    **c_styles.TEXT_STYLE["subseccion"],
                                    margin_top=Size.MEDIUM.value),
                            
                            rx.text("En internet hay mucha información falsa sobre trading y finanzas. "
                                    "Asegúrate de analizar la fuente de cada dato y aplicar un pensamiento "
                                    "crítico antes de tomar decisiones financieras.",
                                    **c_styles.TEXT_STYLE["body"]
                                    ),
                            
                            rx.heading("4. Mantén una mentalidad realista y disciplinada",
                                       **c_styles.TEXT_STYLE["subseccion"],
                                        margin_top=Size.MEDIUM.value),
                            
                            rx.text("El trading y las finanzas no son un esquema para hacerse rico rápidamente."
                                    " Aquí aprenderás cómo tomar decisiones informadas y minimizar riesgos, "
                                    "pero necesitarás paciencia, disciplina y práctica constante.",
                                    **c_styles.TEXT_STYLE["body"]
                                    ),
                            
                            rx.heading("5. Preparáte para aprender de tus errores",
                                       **c_styles.TEXT_STYLE["subseccion"],
                                        margin_top=Size.MEDIUM.value),
                            
                            rx.text("En el mundo financiero, cometer errores es parte del proceso. No te frustres "
                                    "si algo no sale bien al principio, lo importante es aprender y "
                                    "mejorar con la experiencia.",
                                    **c_styles.TEXT_STYLE["body"]
                                    ),
                            
                            rx.heading("6. Disfruta el proceso y participa activamente",
                                       **c_styles.TEXT_STYLE["subseccion"],
                                        margin_top=Size.MEDIUM.value),
                            
                            rx.text("Haz preguntas, comparte ideas y aprovecha al máximo este curso. La educación"
                                    " financiera es una de las herramientas más valiosas para mejorar tu calidad de vida.",
                                    **c_styles.TEXT_STYLE["body"]
                                   ),
                    ),
                ),
                rx.heading("Muchos Exitos con tu aprendisaje... comencemos 🚀📈",
                           **c_styles.TEXT_STYLE["title"],
                            margin_top=Size.MEDIUM.value),
                rx.link(
                        rx.button("Comenzar con el curso",
                                on_click=lambda: rx.redirect("/choice_modules"), 
                                is_external=False,
                                margin_bottom=Size.BIG.value,
                                **c_styles.BUTTON_STYLE,
                        ),
                ),
                width="100%",
                border_radius="10px",
                align_items="center",
                #max_width="800px"
            ),
        ),
    ),
