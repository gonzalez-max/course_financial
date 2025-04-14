import reflex as rx
import mi_web.styles.styles as styles
from mi_web.styles.styles import Size as Size
from mi_web.components.general_components.link_button import link_button
from mi_web.components.general_components.zoom_images import zoom_images
from mi_web.components.general_components.carousel import CarouselState


def projects() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(
                " Proyectos",
                **styles.text_main_page["title"],
                color="#ffff99",
                margin_bottom=Size.MEDIUM.value
            ),
        rx.box(
            rx.flex(
                rx.card(
                    rx.heading("Curso de Finanzas, Trading y Cómo Evitar Estafas",
                                   margin_bottom=Size.MEDIUM.value,
                                   **styles.text_main_page["subtitle"],
                                   color="white",
                                   text_align="left",
                                   ),
                        
                    rx.heading("Curso educativo enfocado en brindar "
                                "herramientas financieras básicas, principios de inversión "
                                "responsable y prevención de fraudes comunes en el mundo del trading.",
                                font_style ="normal",
                                text_align = "left",
                                align_items ="center",
                                padding ="10px",
                                letter_spacing = "1px",
                                text_wrap ="normal",
                                width="100%",
                                margin="auto",
                                display="block",
                                color="white",
                                font_size="20px",
                                font_weight="300",
                                ),
                    
                    rx.text(" Tecnologías utilizadas:",
                            **styles.text_main_page["subtitle"],
                            color="white",
                            text_align="left",),
                    
                    rx.list.ordered(
                            rx.list.item("Python",
                                     margin_bottom=Size.MEDIUM.value,
                                     **styles.text_main_page["body"]),
                            rx.list.item("CSS",
                                     margin_bottom=Size.MEDIUM.value,
                                     **styles.text_main_page["body"]),
                            rx.list.item("Reflex",
                                         **styles.text_main_page["body"]),
                            list_style_type="disc",
                            color="white",
                            margin_bottom=Size.DEFAULT.value
                        ),
                
                    rx.box(
                        rx.center(
                            rx.vstack(
                                zoom_images(CarouselState.images[CarouselState.index]),
                                    rx.hstack(
                                        rx.button("❮",
                                                  on_click=CarouselState.prev_image,
                                                  **styles.corousel_button_style,
                                                  ),
                                        rx.button("❯",
                                                  on_click=CarouselState.next_image,
                                                  **styles.corousel_button_style,
                                                  ),
                                        on_mount=CarouselState.on_load,
                                        spacing="2",
                                        justify="center",
                                        width="100%"
                                    )
                            ),
                            padding="2"
                        )
                        
                    )
                ),
                
            ),
        ),
        
        
        
        
        
        
        
        ),
    id="mis-proyectos",
    justify="center",
    padding_top="60px",  # Opcional: compensar altura del navbar
    padding_bottom="60px", 
    **styles.global_styles,
    margin_bottom=Size.BIG.value
    ),
    
