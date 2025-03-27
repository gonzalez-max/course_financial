import reflex as rx 
from mi_web.components.general_components.nav_bar import navbar_dropdown
from mi_web.components.general_components.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.course_styles as c_styles
import mi_web.styles.styles as styles
from mi_web.components.general_components.drawer import drawer
from mi_web.components.course_components.module1_components.saving_bar import saving_bar
from mi_web.components.course_components.module1_components.table1_module1 import table1_module1
from mi_web.components.course_components.module1_components.table2_module1 import table2_module1
from mi_web.components.course_components.links_course.next_button import next_button
from mi_web.components.course_components.links_course.back_button import back_button
from mi_web.components.general_components.zoom_images import zoomed_image
from mi_web.components.general_components.imagenes.image_despedida import image_despedida


def module_1() -> rx.Component:
    return rx.box(
        navbar_dropdown(),
        drawer(),
        rx.center( 
            rx.vstack(
                rx.box(
                    #Encabezado del módulo
                    rx.heading("Módulo 1: Fundamentos de Finanzas Personales y Mercado Financiero", **c_styles.TEXT_STYLE["title"]),
                    
                    #Sección 1: ¿Qué son las finanzas?
                    rx.heading("1. ¿Qué son las finanzas?", **c_styles.TEXT_STYLE["subtitle"]),
                    rx.text("Las finanzas corresponden a un área de la economía que estudia la obtención y administración de dinero "
                        "y de capital, es decir, los recursos financieros.\n"
                        "Estudia tanto la obtención de recursos (financiación), como la inversión y el ahorro de los mismos.",
                        **c_styles.TEXT_STYLE["body"],
                        margin_bottom=Size.DEFAULT.value, 
                    ),
                   
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                    
                    #Sección 2: Conceptos Contables
                    rx.heading("2. Conceptos Contables", **c_styles.TEXT_STYLE["subtitle"]),

                    #Lista de conceptos contables
                    rx.list.ordered(
                        rx.list.item("Cuentas patrimoniales"),
                        rx.list.item("Activo, pasivo y patrimonio neto"),
                        rx.list.item("Cuentas de resultados"),
                        rx.list.item("Ingresos, gastos y resultado"),
                        list_style_type="disc",
                        color="white",
                        margin_bottom=Size.DEFAULT.value,
                    ),

                    #Cuentas patrimoniales
                    rx.heading("Cuentas patrimoniales", **c_styles.TEXT_STYLE["subseccion"]),

                    #Tabla con explicaciones de los conceptos financieros
                    rx.vstack(
                        table1_module1(),
                        margin_bottom=Size.DEFAULT.value),
                
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                
                    # Seccion 3 El Ahorro
                    rx.heading("3. El ahorro", **c_styles.TEXT_STYLE["subtitle"]),
                    #imagen alcancia 
                    rx.hstack(
                        zoomed_image("/el_ahorro.jpg?refresh=1"),
                        margin_bottom=Size.DEFAULT.value
                    ),
                
                    rx.text("Este hábito no solo te ayudará a construir un fondo de emergencia, sino que también te permitirá"
                            "invertir en oportunidades futuras. Con el tiempo, ese 10% acumulado puede brindarte estabilidad financiera " 
                            "y mayor libertad para tomar decisiones sin presiones económicas."
                            ,**c_styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    rx.text(rx.text.strong("Por ejemplo"),", si cobrás $100.000 por mes, destinar el 10% significaría ahorrar $10.000 de entrada. "
                            "Si configurás una transferencia automática el mismo día que te depositan el sueldo, te asegurás de no "
                            "gastarlo sin darte cuenta. También podés usar una app que redondee cada compra al peso superior y mande la "
                            "diferencia a una cuenta de ahorros. A la larga, estos pequeños aportes suman más de lo que imaginás,"
                            " y casi sin esfuerzo."
                            ,**c_styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    
                    #ejemplo grafico de ahorro
                    rx.vstack(
                        saving_bar(),
                        margin_bottom=Size.DEFAULT.value
                    ),
                    #Analisis del grafico y conclusion
                    rx.heading("Análisis del Gráfico",**c_styles.TEXT_STYLE["subseccion"]),
                    rx.text("El gráfico muestra cómo un ahorro constante del 10% del ingreso mensual"
                            " ($10.000) se acumula a lo largo del año. Al final del período, el ahorro "
                            "total alcanza los $120.000, demostrando el impacto positivo de la constancia en el ahorro.",
                            **c_styles.TEXT_STYLE["body"]),
                    rx.heading("Conclusión",**c_styles.TEXT_STYLE["subseccion"]),
                    rx.text("Adoptar este hábito no solo permite construir un fondo de emergencia, sino que también"
                            " abre oportunidades de inversión y estabilidad financiera a largo plazo",**c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
                
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                
                    #seccion 4 Identificacion de Gastos
                    rx.heading("4. Identificacion de Gastos", **c_styles.TEXT_STYLE["subtitle"]),
                    
                    #imagen identificacion gastos
                    rx.hstack(
                        zoomed_image("/identificacion_gastos.jpg?refresh=1"),
                        margin_bottom=Size.DEFAULT.value
                    ),
                    rx.text("Para una correcta administración financiera, es clave identificar y clasificar los diferentes" 
                            "tipos de gastos. Esto permite entender mejor el flujo de dinero y tomar decisiones más "
                            "inteligentes sobre el presupuesto.", **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
                    #subseccion 
                    rx.heading("1. Gastos Fijos y Supervivencia", **c_styles.TEXT_STYLE["subseccion"]),
                    rx.text("Son aquellos necesarios para mantener un nivel de vida estable y no suelen cambiar mes a mes."
                            " Deben ser prioridad en cualquier planificación financiera.", **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
                    #ejemplo 
                    rx.hstack(
                        rx.heading("Ejemplos: ", **c_styles.TEXT_STYLE["subseccion"]),
                        rx.list.ordered(
                            rx.list.item("Alquiler o hipoteca"),
                            rx.list.item("Servicios basicos (Agua, luz, gas, internet)"),
                            rx.list.item("Alimentacion"),
                            rx.list.item("Transporte esencial"),
                            list_style_type="disc",
                            color="white"
                        ),margin_bottom=Size.DEFAULT.value),
                    
                    #subseccion
                    rx.heading("2. Gastos Variables", **c_styles.TEXT_STYLE["subseccion"]),
                    rx.text("Son gastos que pueden fluctuar dependiendo del mes y del estilo de vida."
                            " Se pueden ajustar según las necesidades y prioridades.", **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
                    
                    #ejemplo
                    rx.hstack(
                    rx.heading("Ejemplos: ", **c_styles.TEXT_STYLE["subseccion"]),
                    rx.list.ordered(
                        rx.list.item("Combustible"),
                        rx.list.item("Mantenimiento de vehiculo"),
                        rx.list.item("Compras no escenciales"),
                        rx.list.item("Viajes"),
                        list_style_type="disc",
                        color="white"
                    ),margin_bottom=Size.DEFAULT.value),
                    #subseccion
                    rx.heading("3. Gastos Extraordinarios", **c_styles.TEXT_STYLE["subseccion"]),
                    rx.text("Son aquellos imprevistos que pueden generar un impacto en la economía personal."
                            " Para estos, es recomendable contar con un ", rx.text.strong("fondo de emergencia")," que permita cubrirlos,"
                            " sin afectar el presupuesto mensual.", **c_styles.TEXT_STYLE["body"],margin_bottom=Size.DEFAULT.value),
                    #ejemplo
                    rx.hstack(
                    rx.heading("Ejemplos: ", **c_styles.TEXT_STYLE["subseccion"]),
                    rx.list.ordered(
                        rx.list.item("Reparaciones del Hogar o Vehiculo"),
                        rx.list.item("Emergencias Medicas"),
                        rx.list.item("Reemplazo de Electrodomesticos"),
                        rx.list.item("Multas o Deudas Inesperadas"),
                        list_style_type="disc",
                        color="white"
                    ), margin_bottom=Size.DEFAULT.value),
                    rx.text(rx.text.strong("importante:")," Llevar un registro detallado de los gastos ayuda a "
                            "identificar patrones y encontrar oportunidades de ahorro. Aplicaciones de finanzas "
                            "personales o simples hojas de cálculo pueden ser herramientas útiles para este propósito.", 
                            **c_styles.TEXT_STYLE["body"],
                            margin_bottom=Size.DEFAULT.value),
                
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                
                    #seccion 5 Conceptos Financieros Clave
                    rx.heading("Conceptos Financieros Clave", **c_styles.TEXT_STYLE["subtitle"]),
                    rx.text("Para comprender mejor la gestión financiera y la toma de decisiones económicas,"
                        " es fundamental conocer estos conceptos clave:", **c_styles.TEXT_STYLE["body"]),
                    #tabla conceptos financieros
                    rx.vstack(
                        table2_module1(),
                        margin_bottom=Size.DEFAULT.value
                        ),
                
                    rx.divider(border_color="gray", border_width="1px", margin_y=Size.SMALL.value,margin_bottom=Size.DEFAULT.value),
                
                    #conclusion
                    rx.heading("Conclusión del Módulo 1:", **c_styles.TEXT_STYLE["subtitle"]),
                    rx.list.ordered(
                        rx.list.item(rx.text.strong("Resumen:")," Hemos explorado qué son las finanzas,"
                                     " los conceptos contables básicos, la importancia del ahorro, "
                                     "la identificación de gastos y conceptos financieros clave."),
                        rx.list.item(rx.text.strong("Aplicación Práctica:")," Te invitamos a revisar tus propios gastos "
                                     "y a empezar a llevar un registro detallado. Calculá tu rentabilidad personal y "
                                     "pensá en estrategias para optimizar tu presupuesto."),
                        rx.list.item(rx.text.strong("Próximos Pasos:")," En el próximo módulo veremos los perfiles de inversores, intrumentos de inversion"
                                     " y sus caracteristicas."),
                        list_style_type="disc",
                        color="white",
                        margin_bottom=Size.DEFAULT.value
                    ),                
                ),
                #_____________________________________________________________________________________#
                max_width="600px",
                width="100%",
                margin_y=Size.SMALL.value,
                align_items="center",
            )
        ),
        image_despedida(),         
        next_button("/module_2"),
        footer(),
        **styles.global_styles
    )
