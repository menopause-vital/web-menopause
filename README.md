# Menopause Vital - Landing Page

Landing page para la venta de probióticos Menopause Vital, diseñada para desplegarse en Vercel como sitio estático.

> Última actualización: 2024

## 🚀 Características

- ✅ Diseño responsivo (desktop, tablet y móvil)
- ✅ Formulario de pedidos con validación
- ✅ Integración con EmailJS para envío de emails
- ✅ Botón flotante de pedido
- ✅ Modal de formulario interactivo
- ✅ Secciones optimizadas para conversión
- ✅ Optimizado para SEO

## 📁 Estructura del Proyecto

```
web-menopause/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Este archivo
```

## ⚙️ Configuración de EmailJS

Antes de desplegar, necesitas configurar EmailJS para que los formularios funcionen correctamente:

### Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com](https://www.emailjs.com)
2. Crea una cuenta gratuita (hasta 200 emails/mes gratis)

### Paso 2: Crear un servicio de Email

1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **Copia el Service ID** (lo necesitarás después)

### Paso 3: Crear un Template de Email

1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa el siguiente formato para el template:

**Subject:**
```
{{subject}}
```

**Content (HTML o Text):**
```
Nuevo pedido contraentrega - Menopause Vital

Fecha y hora: {{fecha_hora}}

Datos del cliente:
- Nombre: {{from_name}}
- Email: {{from_email}}
- Teléfono: {{phone}}

Dirección de envío:
- Departamento: {{departamento}}
- Ciudad/Municipio: {{ciudad}}
- Dirección: {{direccion}}
- Barrio: {{barrio}}

Detalles del pedido:
- Cantidad: {{cantidad}} unidad(es)
- Medio de contacto preferido: {{contacto_preferido}}
- Observaciones: {{observaciones}}

---
Este email fue enviado desde el formulario de pedidos de Menopause Vital.
```

4. **Copia el Template ID** (lo necesitarás después)

### Paso 4: Obtener tu Public Key

1. Ve a "Account" → "General"
2. **Copia tu Public Key** (también llamado API Key o User ID)

### Paso 5: Configurar las credenciales en el código

Abre `script.js` y reemplaza las siguientes constantes al inicio del archivo:

```javascript
const EMAILJS_PUBLIC_KEY = "TU_PUBLIC_KEY_AQUI";      // Tu Public Key
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";          // Tu Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";        // Tu Template ID
const ORDER_RECEIVER_EMAIL = "pedidos@menopausevital.com"; // Tu email receptor
```

**Importante:** También necesitas actualizar el campo `order_receiver_email` en el template de EmailJS con el mismo valor que `ORDER_RECEIVER_EMAIL`.

## 📦 Despliegue en Vercel

### Opción 1: Desde GitHub

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/web-menopause.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [https://vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Selecciona tu repositorio `web-menopause`
   - Vercel detectará automáticamente que es un sitio estático
   - Haz clic en "Deploy"
   - ¡Listo! Tu sitio estará en línea

### Opción 2: Desde Vercel CLI

```bash
# Instala Vercel CLI
npm i -g vercel

# En el directorio del proyecto
vercel

# Sigue las instrucciones en pantalla
```

## 🔧 Variables de Entorno (Opcional)

Si prefieres usar variables de entorno en lugar de hardcodear las credenciales, puedes:

1. Crear un archivo `.env` (NO subirlo a GitHub):
```
EMAILJS_PUBLIC_KEY=tu_public_key
EMAILJS_SERVICE_ID=tu_service_id
EMAILJS_TEMPLATE_ID=tu_template_id
```

2. Agregar `.env` a `.gitignore`

3. En Vercel, configurar las variables de entorno en "Settings" → "Environment Variables"

**Nota:** Para sitios estáticos, las variables de entorno solo están disponibles en build time, no en runtime. Por lo tanto, es más práctico mantener las credenciales directamente en `script.js` para este caso.

## 🎨 Personalización

### Cambiar colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-pink: #f4a6d0;
    --primary-purple: #a78bfa;
    --primary-gold: #fbbf24;
    /* ... más colores ... */
}
```

### Cambiar textos

Todos los textos están directamente en `index.html`. Puedes modificarlos directamente en el HTML.

### Cambiar imagen del producto

En `index.html`, línea donde aparece la imagen del producto:

```html
<img src="https://via.placeholder.com/500x600/f4a6d0/ffffff?text=Menopause+Vital" alt="...">
```

Reemplaza la URL con la URL de tu imagen del producto (puedes subirla a un servicio como Cloudinary, Imgur, o directamente en GitHub).

## 📱 Pruebas

Antes de desplegar, prueba localmente:

1. Abre `index.html` en tu navegador
2. O usa un servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (con http-server)
   npx http-server
   ```
3. Abre `http://localhost:8000` en tu navegador

## 🔒 Seguridad

- Las credenciales de EmailJS están expuestas en el código del cliente. Esto es normal para sitios estáticos.
- EmailJS tiene protección contra spam y abuso.
- Considera implementar un límite de envíos por IP si es necesario.

## 📞 Soporte

Para problemas o preguntas:
- Email: info@menopausevital.com
- Revisa la documentación de EmailJS: [https://www.emailjs.com/docs](https://www.emailjs.com/docs)
- Revisa la documentación de Vercel: [https://vercel.com/docs](https://vercel.com/docs)

## 📄 Licencia

Este proyecto es propiedad de Menopause Vital.

---

**Desarrollado con ❤️ para Menopause Vital**

