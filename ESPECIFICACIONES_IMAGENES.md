# Especificaciones de Imágenes para Menopause Vital

Este documento detalla las especificaciones técnicas, tamaños, formatos y ubicaciones de todas las imágenes que necesitas diseñar para la landing page.

## 📁 Estructura de Carpetas

Crea una carpeta llamada `images` en la raíz del proyecto y coloca todas las imágenes allí.

```
web-menopause/
├── images/
│   ├── hero-producto.jpg
│   ├── infografia-beneficios.jpg
│   ├── pago-contraentrega.jpg
│   ├── testimonial-laura.jpg
│   ├── testimonial-marcela.jpg
│   └── testimonial-adriana.jpg
```

---

## 🖼️ Imagen 1: Hero - Producto Principal

**Ubicación en el código:** `index.html` línea 22  
**ID/Clase:** `heroImage`

### Especificaciones Técnicas:
- **Tamaño recomendado:** 1200px × 1440px (proporción 5:6)
- **Tamaño mínimo:** 800px × 960px
- **Formato:** JPG (optimizado) o PNG (si necesita transparencia)
- **Peso máximo:** 200KB (optimizado para web)
- **Resolución:** 72 DPI (web)
- **Orientación:** Vertical

### Ubicación Visual:
- Sección hero principal (primera sección de la página)
- Lado izquierdo en desktop, arriba en móvil
- Junto al texto principal y botón de "Pedir con pago contraentrega"

### Contenido Sugerido:
- Fotografía del producto Menopause Vital (frasco/envase)
- Fondo neutro (blanco o tono beige claro #e3d8d6)
- Iluminación profesional
- Puede incluir elementos gráficos sutiles

---

## 🖼️ Imagen 2: Infografía de Beneficios

**Ubicación en el código:** `index.html` línea 42  
**ID/Clase:** `benefitsInfographic`

### Especificaciones Técnicas:
- **Tamaño recomendado:** 1920px × 1080px (proporción 16:9) o 1200px × 1600px (vertical)
- **Tamaño mínimo:** 1200px × 675px
- **Formato:** JPG (optimizado) o PNG (si usa transparencia)
- **Peso máximo:** 300KB (optimizado para web)
- **Resolución:** 72 DPI (web)
- **Orientación:** Horizontal (preferido) o vertical

### Ubicación Visual:
- Justo después del botón "Pedir con pago contraentrega" del hero
- Antes de la sección "¿Qué es Menopause Vital?"
- Ocupa el ancho completo de la página

### Contenido Sugerido:
- Infografía visual explicando los beneficios del probiótico menopáusico
- Puede incluir iconos, textos, gráficos
- Diseño atractivo y fácil de leer
- Colores sugeridos: usar la paleta (#7e3f50, #e17881, #e3d8d6, #ffffff)

---

## 🖼️ Imagen 3: Imagen de Pago Contraentrega

**Ubicación en el código:** `index.html` línea 114  
**ID/Clase:** `securePurchaseImage`

### Especificaciones Técnicas:
- **Tamaño recomendado:** 1920px × 1080px (proporción 16:9) o 1200px × 800px
- **Tamaño mínimo:** 1200px × 675px
- **Formato:** JPG (optimizado)
- **Peso máximo:** 250KB (optimizado para web)
- **Resolución:** 72 DPI (web)
- **Orientación:** Horizontal

### Ubicación Visual:
- Después de la sección de testimonios (carrusel)
- Antes de la sección de Preguntas Frecuentes (FAQ)
- Ocupa el mismo espacio que tenía la sección anterior de texto de pago

### Contenido Sugerido:
- Diseño visual sobre pago contraentrega seguro
- Puede incluir iconos de seguridad, mensajería, pago
- Textos sobre garantía de pago al recibir
- Diseño confiable y profesional

---

## 👤 Imagen 4-6: Fotos de Testimonios

### Testimonio 1: Laura
**Ubicación:** `images/testimonial-laura.jpg`  
**ID/Clase:** `testimonialLaura`

### Testimonio 2: Marcela
**Ubicación:** `images/testimonial-marcela.jpg`  
**ID/Clase:** `testimonialMarcela`

### Testimonio 3: Adriana
**Ubicación:** `images/testimonial-adriana.jpg`  
**ID/Clase:** `testimonialAdriana`

### Especificaciones Técnicas (Todas las fotos de testimonios):
- **Tamaño recomendado:** 400px × 400px (cuadrado)
- **Tamaño mínimo:** 300px × 300px
- **Formato:** JPG (optimizado)
- **Peso máximo:** 100KB por imagen
- **Resolución:** 72 DPI (web)
- **Forma:** Circular (se mostrará en un marco redondo)

### Ubicación Visual:
- En el carrusel de testimonios
- Cada foto aparece en un círculo arriba del testimonio
- Visible una a la vez en móvil (carrusel)
- En desktop pueden mostrarse varias si el diseño lo permite

### Contenido Sugerido:
- Fotografías profesionales de mujeres
- Fondo neutro o difuminado
- Sonrisa natural y amigable
- Iluminación suave
- Corte de retrato (hombros y cabeza)

---

## 📝 Resumen de Imágenes Necesarias

| # | Nombre del Archivo | Tamaño | Formato | Ubicación en Página |
|---|-------------------|--------|---------|---------------------|
| 1 | `hero-producto.jpg` | 1200×1440px | JPG | Hero principal (inicio) |
| 2 | `infografia-beneficios.jpg` | 1920×1080px | JPG | Después del botón hero |
| 3 | `pago-contraentrega.jpg` | 1920×1080px | JPG | Después de testimonios |
| 4 | `testimonial-laura.jpg` | 400×400px | JPG | Carrusel de testimonios |
| 5 | `testimonial-marcela.jpg` | 400×400px | JPG | Carrusel de testimonios |
| 6 | `testimonial-adriana.jpg` | 400×400px | JPG | Carrusel de testimonios |

---

## 🎨 Guía de Colores

Usa esta paleta de colores en el diseño de las imágenes:

- **#7e3f50** - Color oscuro principal (bordeaux/rosa oscuro)
- **#e17881** - Color coral/rosa (acentos)
- **#e3d8d6** - Beige/rosa muy claro (fondos)
- **#ffffff** - Blanco

---

## ⚡ Optimización de Imágenes

Para mejorar el rendimiento de la página:

1. **Comprime las imágenes** usando herramientas como:
   - TinyPNG / TinyJPG
   - ImageOptim
   - Squoosh

2. **Formato WebP** (opcional pero recomendado):
   - Convierte a WebP para mejor compresión
   - Mantén JPG como fallback

3. **Lazy Loading:**
   - Las imágenes ya están configuradas para cargar cuando sean visibles

---

## 📱 Responsive

Todas las imágenes se adaptarán automáticamente a:
- **Desktop:** 1920px - 1200px de ancho
- **Tablet:** 768px - 1024px de ancho
- **Móvil:** 320px - 767px de ancho

Las imágenes se escalarán proporcionalmente manteniendo su aspecto.

---

## ✅ Checklist Antes de Subir

- [ ] Todas las imágenes tienen el nombre correcto
- [ ] Todas están en formato JPG o PNG optimizado
- [ ] Peso total de imágenes < 1MB
- [ ] Imágenes están en la carpeta `images/`
- [ ] Pruebas en diferentes dispositivos

---

**Nota:** Una vez que tengas las imágenes diseñadas, simplemente colócalas en la carpeta `images/` con los nombres especificados. La página las cargará automáticamente.

