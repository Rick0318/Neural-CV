# Neural CV — CV Interactivo con Red Neuronal en Espiral

Una página web personal para currículum vitae con estética futurista y una red neuronal animada en 3D.

## ✨ Características

- 🧠 **Red neuronal en espiral 3D** con Three.js — nodos, conexiones y pulsos animados
- ✏️ **Edición directa** desde la página — sin tocar código
- 💾 **Guardado automático** en localStorage — los datos persisten al recargar
- 📄 **Exportar a PDF** — versión profesional y limpia del CV
- 🔒 **Backup/Importar** — copia de seguridad en JSON
- 🎨 **3 paletas de color** — azul, violeta, cian
- 📱 **Responsive** — funciona en móvil, tablet y escritorio
- ♿ **Accesible** — navegación por teclado, opción de reducir movimiento

## 📂 Secciones del CV

- Perfil principal (foto, nombre, contacto, redes)
- Sobre mí
- Experiencia laboral
- Educación
- Habilidades técnicas y personales
- Proyectos (con imagen, links, tecnologías)
- Certificaciones y cursos
- Idiomas
- Información adicional (voluntariado, premios, publicaciones...)

## 🚀 Inicio rápido

### Requisitos
- Node.js 18+ 
- npm 9+

### Instalar dependencias
```bash
npm install
```

### Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre http://localhost:5173 en tu navegador.

### Construir para producción
```bash
npm run build
```

### Vista previa del build
```bash
npm run preview
```

## 🖊️ Cómo usar

1. Abre la página en el navegador
2. Pulsa **"Editar CV"** en la barra superior o en el hero
3. Completa los campos haciendo clic en ellos
4. Los cambios se guardan automáticamente
5. Para exportar el PDF pulsa el botón **"PDF"** en la barra
6. Para hacer un backup pulsa **"Backup"** → descarga un JSON
7. Para restaurar un backup pulsa **"Importar"**

## 🎨 Personalización

- Cambia el color de acento con los tres puntos de color en la barra
- Puedes ocultar/mostrar cualquier sección con el icono del ojo (en modo edición)
- Puedes renombrar los títulos de sección haciendo clic en el icono de edición junto a ellos
- Pausa/reanuda la animación con el botón de pausa

## 🛠️ Tecnologías

- **React 18** + **TypeScript**
- **Three.js** — red neuronal 3D
- **jsPDF** — exportación a PDF
- **Lucide React** — iconos
- **Vite** — bundler

## 📁 Estructura del proyecto

```
src/
├── types/cv.ts          # Modelo de datos del CV
├── hooks/useCV.ts       # Estado y persistencia del CV
├── utils/
│   ├── storage.ts       # localStorage + backup/import
│   └── pdfExport.ts     # Generación de PDF
├── components/
│   ├── neural/
│   │   └── NeuralSpiral.tsx   # Animación 3D
│   ├── ui/
│   │   ├── GlassCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── SectionHeader.tsx
│   │   └── Toolbar.tsx
│   └── sections/
│       ├── ProfileSection.tsx
│       ├── AboutSection.tsx
│       ├── ExperienceSection.tsx
│       ├── EducationSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── CertificationsSection.tsx
│       ├── LanguagesSection.tsx
│       └── AdditionalSection.tsx
└── App.tsx
```
