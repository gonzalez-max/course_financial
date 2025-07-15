import reflex as rx

class CarouselState(rx.State):
    index: int = 0
    images = [
        "/landing_course.png",
        "/seccion_modulos.png",
        "/captura1_modulos.png",
        "/captura2_modulos.png",
        "/captura3_modulos.png",
        "/captura4_modulos.png",
    ]

    def next_image(self):
        self.index = (self.index + 1) % len(self.images)

    def prev_image(self):
        self.index = (self.index - 1) % len(self.images)

    def on_load(self):
        self.index = 0
        
        
class CarouselState2(rx.State):
    index: int = 0
    images = [
        "findash_captura_1.PNG",
        "findash_captura_2.PNG",
        "findash_captura_3.PNG",
        "findash_captura_4.PNG",
        "findash_captura_5.PNG",
    ]

    def next_image(self):
        self.index = (self.index + 1) % len(self.images)

    def prev_image(self):
        self.index = (self.index - 1) % len(self.images)

    def on_load(self):
        self.index = 0
        