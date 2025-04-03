import reflex as rx
from mi_web.components.course_components.links_course.course_navbar import navbar_course
from mi_web.components.general_components.footer import footer
from mi_web.styles.styles import Size as Size
import mi_web.styles.styles as styles
import mi_web.styles.course_styles as c_styles
from mi_web.components.course_components.links_course.next_button import next_button
from mi_web.components.course_components.links_course.back_button import back_button
from mi_web.components.general_components.zoom_images import zoomed_image
from mi_web.components.course_components.module7_components.module7_table import table1_module7
from mi_web.components.course_components.module7_components.module7_table import mobile_table1_module7





def module_8() -> rx.Component:
    return rx.box(
        navbar_course(),
        rx.center( 
            rx.vstack(
                rx.box(
                        #titulo del modulo 
                        rx.heading("Módulo 8: Hablemos de Criptomonedas",
                                   **c_styles.TEXT_STYLE["title"],
                                   margin_top="35px"),
                        
                        #seccion 1 que son las criptomonedas
                        rx.heading("¿Qué son las criptomonedas?",
                                   **c_styles.TEXT_STYLE["subtitle"]),
                       
                        rx.text("Las criptomonedas son activos digitales "
                                "diseñados para funcionar como un medio de "
                                "intercambio, utilizando criptografía para garantizar "
                                "transacciones seguras, controlar la creación de nuevas "
                                "unidades y verificar la transferencia de activos."),
                        #imagen de criptos
                        
                        rx.text("A diferencia del dinero tradicional (como el dólar o el euro), "
                                "las criptomonedas no dependen de bancos centrales ni gobiernos, "
                                "sino que operan en una red descentralizada basada en tecnología "
                                "blockchain. Esto significa que todas las transacciones quedan "
                                "registradas en un libro contable público, transparente "
                                "y difícil de alterar."),
                        
                        #seccion 2 principales criptomonedas
                        rx.heading("Principales criptomonedas",
                                   **c_styles.TEXT_STYLE["subtitle"]),
                        
                        rx.text("Las principales criptomonedas del mercado se destacan por su adopción"
                                ", tecnología y capitalización bursátil. A continuación, te presento "
                                "algunas de las más relevantes:"),
                        rx.box(
                            rx.vstack(
                                #BTC
                                rx.heading("1. Bitcoin (BTC) – La pionera",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                #lista origen bitcoin
                                rx.list.ordered(
                                    rx.list.item("Creada en 2009 por Satoshi Nakamoto."),
                                    rx.list.item("Considerada el oro digital por su escasez (solo existirán 21 millones de BTC)."),
                                    rx.list.item("Es la más utilizada y aceptada como reserva de valor."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                                
                                #ETH
                                rx.heading("2. Ethereum (ETH) – La base de los contratos inteligentes",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                #lista origen eth
                                rx.list.ordered(
                                    rx.list.item("Introducida en 2015 por Vitalik Buterin."),
                                    rx.list.item("Permite la creación de contratos inteligentes y "
                                                 "aplicaciones descentralizadas (dApps)."),
                                    rx.list.item("Base de muchas otras criptomonedas y proyectos en el mundo cripto."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                                
                                #BNB
                                rx.heading("3. Binance Coin (BNB) – La moneda del ecosistema Binance",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                #lista origen BNB
                                rx.list.ordered(
                                    rx.list.item("Nació en 2017 como el token nativo del exchange Binance."),
                                    rx.list.item("Se usa para pagar comisiones en la plataforma y participar "
                                                 "en proyectos dentro del ecosistema."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                                #ADA
                                rx.heading("4. Cardano (ADA) – Un enfoque científico",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                #lista origen ADA
                                rx.list.ordered(
                                    rx.list.item("Desarrollada por Charles Hoskinson, cofundador de Ethereum."),
                                    rx.list.item("Destaca por su metodología basada en investigación científica y "
                                                 "su algoritmo de consenso Proof-of-Stake (PoS)."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                                #SOL
                                rx.heading("5. Solana (SOL) – Rápida y escalable",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                #lista origen SOL
                                rx.list.ordered(
                                    rx.list.item("Conocida por su velocidad y bajos costos de transacción."),
                                    rx.list.item("Soporta contratos inteligentes y NFTs, compitiendo con "
                                                 "Ethereum en ese ámbito."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                                
                                #consejo
                                rx.heading("¡¡Atencion!!"),
                                rx.text("Antes de invertir en una criptomoneda, es importante analizar su "
                                        "tecnología, propósito y adopción en el mercado"),
                            ),                        
                        ),#cierre del box
                        
                        #seccion 3 blockchain
                        rx.box(
                            rx.vstack(
                                rx.heading("Blockchain: ¿Qué es y cómo funciona?",
                                   **c_styles.TEXT_STYLE["subtitle"]),
                                rx.text("Un blockchain (cadena de bloques) es un registro digital descentralizado"
                                        " y seguro donde se almacenan transacciones de manera inmutable. En lugar "
                                        "de depender de una entidad central (como un banco), la información se "
                                        "distribuye entre múltiples computadoras en una red."),
                                
                                rx.text("Este sistema es clave en el mundo de las criptomonedas, ya que permite "
                                        "registrar y verificar transacciones sin necesidad de intermediarios."),
                                
                                #subseccion como funciona un blockchain
                                rx.heading("¿Cómo funciona un blockchain?",
                                           **c_styles.TEXT_STYLE["subseccion"]),

                                #lista de como funcionan los blockchain
                                rx.list.ordered(
                                    rx.list.item(rx.text.strong("Transacción:")," Un usuario envía información "
                                                 "(por ejemplo, una transferencia de criptomonedas)."),
                                    rx.list.item(rx.text.strong("Verificación:")," La red de nodos (computadoras "
                                                 "conectadas al blockchain) valida la transacción mediante un "
                                                 "consenso (como Proof of Work o Proof of Stake)"),
                                    rx.list.item(rx.text.strong("Creación del bloque:")," Una vez verificada, "
                                                 "la transacción se agrupa con otras y forma un nuevo bloque de datos."),
                                    rx.list.item(rx.text.strong("Encadenamiento:")," El nuevo bloque se enlaza al bloque "
                                                 "anterior, creando una cadena de bloques con un historial inmutable."),
                                    rx.list.item(rx.text.strong("Registro inalterable:")," Una vez añadido a la cadena, "
                                                 "el bloque no puede modificarse, lo que hace al blockchain seguro "
                                                 "y transparente."),
                                    #list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                                
                                #conclusion de blockchain
                                rx.heading("En conclusión...",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("Blockchain es una tecnología revolucionaria que garantiza seguridad"
                                        ", transparencia y descentralización, con aplicaciones en múltiples industrias "
                                        "más allá de las criptomonedas."),
                            ),
                        ),
                        
                        #seccion 4 como se consiguen criptomonedas
                        rx.heading("¿Cómo se consiguen criptomonedas?",
                                    **c_styles.TEXT_STYLE["subtitle"]),
                                rx.text("Existen varias formas de obtener criptomonedas, desde la compra directa hasta la "
                                    "minería o participación en plataformas que las ofrecen como recompensa."),
                                
                        rx.box(
                            rx.vstack(
                                #compra en exchanges
                                rx.heading("Compra en Exchanges",
                                   **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text("La forma más común es comprar criptomonedas en exchanges (plataformas de "
                                        "intercambio como Binance, Coinbase, Kraken o Bitso). Para hacerlo:"),   
                                
                                #lista de como comprar criptomonedas
                                rx.list.ordered(
                                    rx.list.item("Creas una cuenta en un exchange."),
                                    rx.list.item("Depositas dinero en tu moneda local. (llamado dinero FIAT)"),
                                    rx.list.item("Compras la criptomoneda que deseas."),
                                    rx.list.item("La almacenas en una wallet (billetera digital)."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                                #mineria criptomonedas
                                rx.heading("Minería de Criptomonedas",
                                   **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text("Algunas criptomonedas, como Bitcoin, se pueden obtener minando. "
                                        "Esto implica usar computadoras potentes para resolver problemas "
                                        "matemáticos y validar transacciones en la red."),
                                #mini lista mineria
                                rx.list.ordered(
                                    rx.list.item(rx.text.strong(" Proof of Work (PoW):")," Se requiere hardware "
                                                 "especializado (como ASICs)."),
                                    rx.list.item(rx.text.strong("Proof of Stake (PoS):")," Se obtiene criptomonedas"
                                                 "apostando o bloqueando fondos en la red."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                                
                                rx.text("La minería puede ser costosa por el consumo de energía y la necesidad "
                                        "de equipos avanzados."),
                                
                                #staking y yield farming
                                rx.heading("Staking y Yield Farming",
                                   **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text("Algunas criptomonedas permiten ganar recompensas bloqueando fondos en una red:"),
                                
                                #mini lista staking
                                rx.list.ordered(
                                    rx.list.item(rx.text.strong("Staking:")," Bloqueas criptomonedas para ayudar a validar "
                                                 "transacciones y recibes recompensas."),
                                    rx.list.item(rx.text.strong("Yield Farming:")," Depositas criptos en plataformas DeFi "
                                                 "para generar intereses o recompensas."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                                
                                #recibir pagos
                                rx.heading("Recibir pagos en Criptomonedas",
                                   **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text("Si trabajas de manera freelance o tienes un negocio, puedes aceptar pagos en "
                                        "criptomonedas a través de plataformas como BitPay o Lightning Network."),
                            ),
                        ),
                        #seccion 5 carteras y exchanges
                        rx.heading("Carteras y exchanges: diferencias y tipos",
                                   **c_styles.TEXT_STYLE["subtitle"]),
                        rx.text("Cuando hablamos de criptomonedas, es fundamental conocer la diferencia entre carteras "
                                "(wallets) y exchanges, ya que cumplen funciones distintas en la gestión y almacenamiento "
                                "de tus activos digitales."),
                        rx.box(
                            rx.vstack(
                                #subseccion que es una cartera o wallet
                                rx.heading("¿Qué es una cartera (wallet)?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("Una cartera de criptomonedas es una herramienta que permite almacenar, enviar y "
                                        "recibir criptomonedas. Funciona como un 'banco digital personal', donde solo vos "
                                        "tenes el control total de tus fondos."),
                                
                                #tipos de carteras
                                rx.heading(rx.text.strong("Tipos de carteras o wallets")),
                                
                                #listas tipos de carteras
                                rx.text.strong("Carteras frías (Cold Wallets) ❄️"),
                                rx.list.ordered(
                                    rx.list.item(" Almacenamiento fuera de línea (sin conexión a Internet)."),
                                    rx.list.item(" Mayor seguridad, ideal para guardar grandes cantidades a largo plazo."),
                                    rx.list.item(" Ejemplo: Ledger Nano, Trezor."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                                
                                rx.text.strong("Carteras calientes (Hot Wallets) 🔥"),
                                rx.list.ordered(
                                    rx.list.item(" Conectadas a Internet, más accesibles pero menos seguras."),
                                    rx.list.item(" Ideales para operaciones diarias y pequeñas cantidades."),
                                    rx.list.item(" Ejemplo: Trust Wallet, MetaMask."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                            
                            
                                rx.text.strong("Carteras de papel (Paper Wallets) 📜"),
                                rx.list.ordered(
                                    rx.list.item(" Claves privadas impresas en papel."),
                                    rx.list.item(" Seguras si se guardan bien, pero fáciles de perder."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                            
                                #que es un exchange
                                rx.heading("¿Qué es un exchange?",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                rx.text("Un exchange es una plataforma donde puedes comprar, vender e "
                                        "intercambiar criptomonedas. Funciona como una casa de cambio digital "
                                        "y ofrece herramientas para trading."),

                                #tipos de exchanges
                                rx.heading(rx.text.strong("Tipos de exchanges")),
                                
                                #listas tipos de exchanges
                                rx.text.strong("Exchanges Centralizados (CEX)"),
                                rx.list.ordered(
                                    rx.list.item(" Son manejados por empresas que facilitan la compra/venta."),
                                    rx.list.item(" Ejemplo: Binance, Coinbase, Kraken."),
                                    rx.list.item(" Ventaja: Facilidad de uso y alta liquidez."),
                                    rx.list.item(" Desventaja: No tienes control total sobre tus fondos "
                                                 "(pueden ser hackeados)."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                            
                                rx.text.strong("Exchanges Descentralizados (DEX)"),
                                rx.list.ordered(
                                    rx.list.item(" Operan sin intermediarios, conectando directamente a "
                                                 "compradores y vendedores."),
                                    rx.list.item(" Ejemplo: Uniswap, PancakeSwap."),
                                    rx.list.item(" Ventaja: Más seguridad y control de tus fondos."),
                                    rx.list.item(" Desventaja: Pueden ser más complejos de usar y con menor liquidez."
                                                 "(pueden ser hackeados)."),
                                    list_style_type="disc",
                                    color="white",
                                    margin_bottom=Size.DEFAULT.value
                                ),
                            ),
                        ),
                        
                        #tabla comparativa
                        rx.heading("Tabla comparativa",
                                   **c_styles.TEXT_STYLE["subseccion"]),
                        rx.box(
                            table1_module7(),
                            mobile_table1_module7(),
                        ),
                        #conclusion
                        rx.heading("Conclusión:",
                                   **c_styles.TEXT_STYLE["subseccion"]),
                        rx.text("Si querés operar y hacer trading, usá un exchange. "
                                "Si querés almacenar criptos de manera segura, usá una wallet "
                                "(preferiblemente una cartera fría). Lo ideal es no dejar tus "
                                "criptos en un exchange por seguridad y transferirlas a una "
                                "cartera personal"),
                        
                        #seccion 6 riesgos y beneficios de las cripto
                        rx.heading("Riesgos y beneficios de las criptomonedas",
                                   **c_styles.TEXT_STYLE["subtitle"]),
                        rx.text("Las criptomonedas han revolucionado el mundo financiero, "
                                "ofreciendo nuevas oportunidades de inversión y transacciones "
                                "digitales. Sin embargo, también conllevan ciertos riesgos. "
                                "A continuación, analizamos los principales beneficios y "
                                "riesgos de este ecosistema."),
                        rx.box(
                            rx.vstack(
                                #beneficios de las criptomonedas
                                rx.heading("Beneficios de las criptomonedas",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text.strong("Descentralización y autonomía"),
                                rx.text("Las criptomonedas operan sin intermediarios como "
                                        "bancos o gobiernos, lo que permite a los usuarios "
                                        "tener control total sobre sus fondos y realizar "
                                        "transacciones sin restricciones geográficas."),
                                
                                rx.text.strong("Seguridad y transparencia"),
                                rx.text("Gracias a la tecnología blockchain, todas las "
                                        "transacciones quedan registradas de manera "
                                        "inmutable y transparente. Además, los sistemas "
                                        "criptográficos brindan un alto nivel de seguridad."),
                               
                                rx.text.strong("Bajas comisiones y rapidez en transacciones"),
                                rx.text("Las transferencias de criptomonedas suelen tener costos "
                                        "menores en comparación con bancos tradicionales y pueden "
                                        "realizarse de manera rápida, incluso a nivel internacional."),
                                
                                rx.text.strong("Oportunidades de inversión y rentabilidad"),
                                rx.text("Las criptomonedas han demostrado ser una inversión rentable "
                                        "para muchos, con casos como Bitcoin y Ethereum alcanzando "
                                        "valores significativamente altos en el tiempo. Existen "
                                        "oportunidades en trading, staking y DeFi."),
                                
                                rx.text.strong("Privacidad y anonimato"),
                                rx.text("Aunque las transacciones son públicas en la blockchain,"
                                        " los usuarios pueden operar sin revelar su identidad personal, "
                                        "lo que protege su privacidad."),
                                
                                #riesgos de las criptomonedas
                                rx.heading("Beneficios de las criptomonedas",
                                           **c_styles.TEXT_STYLE["subseccion"]),
                                
                                rx.text.strong("Alta volatilidad"),
                                rx.text("Las criptomonedas pueden experimentar fluctuaciones de precio "
                                        "extremas en cortos períodos de tiempo, lo que las convierte "
                                        "en inversiones de alto riesgo."),
                                
                                rx.text.strong("Riesgo de pérdida total de fondos"),
                                rx.text("Si un usuario pierde sus claves privadas, no podrá recuperar sus "
                                        "criptomonedas. A diferencia de los bancos, no hay forma de solicitar "
                                        "un reembolso o recuperar los fondos."),
                                
                                rx.text.strong("Hackeos y estafas"),
                                rx.text("Los exchanges, wallets y plataformas DeFi han sido objetivos de hackeos."
                                        " Además, hay muchas estafas como esquemas Ponzi y fraudes en proyectos cripto."),
                                
                                rx.text.strong("Falta de regulación y respaldo legal"),
                                rx.text("Las criptomonedas aún carecen de una regulación clara en muchos países. "
                                        "Esto implica riesgos legales y la posibilidad de que los "
                                        "gobiernos impongan restricciones."),
                                
                                rx.text.strong("Uso en actividades ilícitas"),
                                rx.text("Debido a su anonimato, las criptomonedas han sido utilizadas en actividades ilegales,"
                                        " lo que ha generado regulaciones más estrictas y restricciones en ciertos lugares"),
                            ),
                        ),
                        
                        rx.heading("En resumen...",
                                   **c_styles.TEXT_STYLE["subseccion"]),
                        rx.text("Las criptomonedas ofrecen múltiples beneficios como autonomía, seguridad y rentabilidad, "
                                "pero también presentan riesgos importantes como volatilidad y falta de regulación. "
                                "Si decides invertir o utilizarlas, es clave informarse, asegurar los fondos adecuadamente"
                                " y diversificar los riesgos."),
                        
                        #conclusion
                    rx.heading("Conclusión del Módulo 8:", **c_styles.TEXT_STYLE["subtitle"],
                               margin_bottom=Size.DEFAULT.value),
                    rx.list.ordered(
                        rx.list.item(rx.text.strong("Resumen:")," En este módulo exploramos qué son las criptomonedas"
                                     ", cómo funcionan y cuál es su impacto en el mundo financiero. Aprendimos sobre "
                                     "la tecnología blockchain que las respalda, las principales criptomonedas del mercado, "
                                     "las diferencias entre carteras y exchanges, y los riesgos y beneficios de operar con "
                                     "estos activos digitales."),
                        rx.list.item(rx.text.strong("Aplicación Práctica:")," Te invitamos a seguir investigando sobre las "
                                     "criptomonedas y su evolución. Podés abrir una cuenta en un exchange de prueba para "
                                     "familiarizarte con su funcionamiento, explorar distintas wallets para aprender "
                                     "cómo almacenar activos digitales de manera segura y analizar las tendencias del "
                                     "mercado antes de invertir. Recordá siempre gestionar los riesgos y mantenerte "
                                     "informado sobre la regulación y seguridad en el ecosistema cripto."),
                        rx.list.item(rx.text.strong("Próximos Pasos:"),""),
                        list_style_type="disc",
                        color="white",
                        margin_bottom=Size.DEFAULT.value
                    ), 
                
                
                
                #_____________________________________________________________________________________#   
                ),
                width="100%",
                border_radius="10px",
                align_items="center",
                justify_content="center",
                max_width="600px",
                size="2" 
                ),
        ),
        back_button("/module_7"),
        #next_button("/module_8"),
        footer(),
        **c_styles.COURSE_STYLES
    )
