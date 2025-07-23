import reflex as rx
import mi_web.styles.course_styles as c_styles

def module3_table1() -> rx.Component:
    return rx.table.root(
                        rx.table.header(
                            rx.table.row(
                                rx.table.column_header_cell("Tip"),
                                rx.table.column_header_cell("Descripción"),
                                background__color="#2d5986"
                            ),
                        ),
                        rx.table.body(
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("⚫ Estudiar:")),
                                rx.table.cell("✅ Es muy importante conocer a profundidad los distintos conceptos "
                                              "y análisis del mercado."),
                                color="white"
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("⚫ Tener un plan:")),
                                rx.table.cell("✅ Hay que tomar seriamente las inversiones, armando un plan que contemple "
                                              "distintos escenarios."),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("⚫ Gestionar el riesgo:")),
                                rx.table.cell("✅ Es fundamental conocer los potenciales riesgos para evaluar correctamente "
                                              "el tamaño de la posición."),
                                color="white",
                            ),
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("⚫ Invertir con ahorros:")),
                                rx.table.cell("❌ Tomar deuda para invertir suele ser una mala idea y aumenta el riesgo financiero."),
                                color="white",
                            ),
                            
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("⚫ No operar para comprar algo:")),
                                rx.table.cell("❌ No es recomendable operar para conseguir dinero rápido para un gasto específico "
                                              "suele llevar a tomar malas decisiones."),
                                color="white",
                            ),
                            
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("⚫ No seguir análisis de otros:")),
                                rx.table.cell("❌ Cada persona tiene un perfil distinto, por lo que debemos invertir según nuestro "
                                              "propio conocimiento y experiencia."),
                                color="white",
                            ),
                                                        
                            rx.table.row(
                                rx.table.row_header_cell(rx.text.strong("⚫ Calcular riesgo/beneficio:")),
                                rx.table.cell("✅ Siempre evaluar el potencial riesgo y beneficio antes de ejecutar una operación."),
                                color="white",
                            ),
                        ),

                        #____________________________________________________________________
                        width="100%",
                        padding="5px",  # Ajusta el padding interno
                        font_size="10px",
                        variant="surface",
                        size="2",
                        **c_styles.TABLES_STYLES
                    ),