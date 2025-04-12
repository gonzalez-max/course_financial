import reflex as rx

class CarouselState(rx.State):
    index: int = 0
    images = [
        "/landing_course.png?refresh=1",
        "/seccion_modulos.png?refresh=1",
        "/captura1_modulos.png?refresh=1",
        "/captura2_modulos.png?refresh=1",
        "/captura3_modulos.png?refresh=1",
        "/captura4_modulos.png?refresh=1"
    ]

    def next_image(self):
        self.index = (self.index + 1) % len(self.images)

    def prev_image(self):
        self.index = (self.index - 1) % len(self.images)

    def on_load(self):
        self.index = 0