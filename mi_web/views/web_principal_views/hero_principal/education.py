import reflex as rx
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size
from mi_web.components.general_components.link_button import link_button


def education() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(
                "Formación/Educacion",
                **styles.text_main_page["title"],
                margin_bottom=Size.MEDIUM.value,
                color="#ffff99"
            ),
            
            rx.box(
                rx.flex(
                    rx.card(
                        rx.heading("✦ Fundamentos de AI – IBM Skillbuild (2025-02)",
                                   **styles.text_main_page["subseccion"]),
                        rx.text("Introducción al pensamiento computacional, machine learning"
                                " y aplicaciones prácticas de la IA en distintos sectores.",
                                **styles.text_main_page["body"],
                                margin_bottom=Size.MEDIUM.value),
                        
                        rx.heading("✦ Introducción a la Ciencia de Datos – Cisco Networking Academy (2025-02)",
                                   **styles.text_main_page["subseccion"]),
                        rx.text("Aprendí a trabajar con datos, identificar patrones y usar herramientas"
                                " básicas para análisis estadístico y visualización.",
                                **styles.text_main_page["body"],
                                margin_bottom=Size.MEDIUM.value),
                        
                        rx.heading("✦ Excel – Santander Open Academy (2025-01)",
                                   **styles.text_main_page["subseccion"]),
                        rx.text("Manejo de funciones, tablas dinámicas y fórmulas avanzadas para la gestión "
                                "y análisis de datos.",
                                **styles.text_main_page["body"],
                                margin_bottom=Size.MEDIUM.value),
                        
                        rx.heading("✦ Fundamentos Python 2 – Cisco Networking Academy (2024-12)",
                                   **styles.text_main_page["subseccion"]),
                        rx.text("Profundización en programación con Python: estructuras de control, "
                                "funciones, listas, manejo de errores y buenas prácticas.",
                                **styles.text_main_page["body"],
                                margin_bottom=Size.MEDIUM.value),
                        
                        rx.heading("✦ Programacion Lenguaje Python - Santander Open Academy (2024-11)",
                                   **styles.text_main_page["subseccion"]),
                        rx.text("Fundamentos de desarrollo en Python orientado a resolver problemas reales "
                                "con lógica y estructuras eficientes.",
                                **styles.text_main_page["body"],
                                margin_bottom=Size.MEDIUM.value),
                        
                        rx.heading("✦ Curso de Asesoramiento Financiero - UTN Buenos Aires (2024-10)",
                                   **styles.text_main_page["subseccion"]),
                        rx.text("Capacitación integral en finanzas personales, productos financieros, "
                                "inversiones y marco regulatorio.",
                                **styles.text_main_page["body"],
                                margin_bottom=Size.MEDIUM.value),
                        
                        rx.heading("✦ Gestión de Proyectos y metodología Agile – Santander Open Academy (2024-10)",
                                   **styles.text_main_page["subseccion"]),
                        rx.text("Aprendí a planificar, organizar y ejecutar proyectos con metodologías ágiles "
                                "como Scrum y Kanban.",
                                **styles.text_main_page["body"],
                                margin_bottom=Size.MEDIUM.value),
                        
                        rx.heading("✦ Introduccion al Desarrollo Web - Google Actívate (2022-05)",
                                   **styles.text_main_page["subseccion"]),
                        rx.text("Conceptos fundamentales de diseño y desarrollo web usando HTML y CSS",
                                **styles.text_main_page["body"],
                                margin_bottom=Size.MEDIUM.value),
            
                    ),
                ), 
            ),
            
            width="100%",
            border_radius="10px",
            align_items="center",
            justify_content="center",
            padding_top="100px",  # Opcional: compensar altura del navbar
            padding_bottom="60px", 
            size="2",
            margin_bottom=Size.MASSIVE.value
        ),

    **styles.global_styles
    ),
    