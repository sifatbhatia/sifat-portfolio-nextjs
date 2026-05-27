# Experimental Creative Sites

**Psychedelic Web Experiences & Retro Web Aesthetics**

---

## Project Overview

**Type:** Creative / Experimental  
**Year:** 2024  
**Tech Stack:** WebGL, Canvas API, SVG, Web Audio API  
**Role:** Design & Development

---

## Challenge

Create immersive, experimental web experiences that push the boundaries of browser-based visuals while maintaining performance and interactivity. The goal was to explore creative coding techniques and deliver memorable, unconventional user experiences that demonstrate technical range and artistic vision.

The project required balancing:
- Visual complexity with 60fps performance
- Mathematical precision with organic, flowing aesthetics
- User control with autonomous, evolving visuals
- Modern browser capabilities with broad compatibility

---

## Approach

Built two distinct experiences that explore opposite ends of the web design spectrum:

### 1. Psychedelic Visualization Engine

A WebGL-powered immersive experience featuring:

**Shader Programming**
- Fragment shaders implementing fractal brownian motion (FBM) with 6-7 octaves
- Domain warping techniques for organic, flowing distortions
- Kaleidoscopic transformations using polar coordinate manipulation
- Real-time HSV color cycling with multiple blend modes

**Six Visual Modes**
1. **Fractal Dream** - Layered FBM with spirals and tunnels
2. **Kaleidoscope** - 6-12 segment symmetry with mandala patterns
3. **Infinite Tunnel** - Zooming portal with depth rings
4. **Cosmic Melt** - Dripping reality with floating eye elements
5. **Sacred Geometry** - Flower of life, Metatron's cube, energy rings
6. **Void Collapse** - Black hole with accretion disk and gravitational lensing

**Particle Systems**
- Canvas-based particle physics with velocity, gravity, and friction
- Trail rendering with fade-out effects
- Mouse-following particles with burst explosions on click
- Color cycling through HSL spectrum

**Procedural Audio**
- Web Audio API synthesis with 8 layered oscillators
- LFO modulation for frequency and filter sweeps
- Filtered noise generation for atmospheric texture
- Real-time parameter modulation based on visual state

**Interactive Elements**
- Custom cursor with blend modes and size transitions
- Mouse position influences shader parameters
- Click events trigger particle bursts and mode changes
- Keyboard input for additional interactions

### 2. Retro Web Aesthetics (GeoCities Tribute)

A deliberate celebration of 1990s web design anti-patterns:

**Visual Elements**
- Comic Sans typography throughout
- Rainbow gradient backgrounds with repeating patterns
- Blinking text and marquee scrolling banners
- Animated GIF-style CSS animations
- Ridge, groove, and outset border styles

**Interactive Features**
- Cascading pop-up chain that guilt-trips users into signing guestbook
- Visitor counter that increments in real-time
- Fake MIDI player with non-functional buttons
- Chat room with bot responses
- "Hit Me" button that changes background colors
- Clippy-style helper assistant

**Content**
- Fake guestbook entries from 2003
- Self-awarded badges and certifications
- Scrolling mantras and philosophical statements
- Fake web ring navigation
- Status bar mimicking Windows XP

---

## Technical Implementation

### WebGL Shader Architecture

```glsl
// Fractal Brownian Motion with rotation
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 r2 = rot(0.37);
  for(int i = 0; i < 7; i++) {
    v += a * noise(p);
    p = r2 * p * 2.0 + vec2(100.0);
    a *= 0.5;
  }
  return v;
}
```

### Performance Optimizations

- **Passive scroll listeners** to prevent blocking main thread
- **RequestAnimationFrame** for smooth 60fps rendering
- **IntersectionObserver** for lazy-loading effects
- **CSS transforms** instead of position changes for animations
- **will-change** hints for GPU-accelerated properties
- **Debounced resize handlers** to prevent layout thrashing

### Audio Synthesis

```javascript
function drone(freq, detune, type) {
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  const f = audioCtx.createBiquadFilter();
  
  o.type = type || 'sine';
  o.frequency.value = freq;
  o.detune.value = detune || 0;
  
  f.type = 'lowpass';
  f.frequency.value = 800;
  f.Q.value = 2;
  
  // LFO for frequency modulation
  const lfo = audioCtx.createOscillator();
  const lfoG = audioCtx.createGain();
  lfo.frequency.value = 0.1 + Math.random() * 0.3;
  lfoG.gain.value = freq * 0.02;
  lfo.connect(lfoG);
  lfoG.connect(o.frequency);
}
```

---

## Outcome

Both projects demonstrate technical range and creative problem-solving:

**Technical Achievements**
- Advanced WebGL shader programming with complex mathematical functions
- Real-time audio synthesis and processing
- Sophisticated particle physics systems
- Smooth 60fps performance despite visual complexity
- Cross-browser compatibility for modern WebGL features

**Creative Achievements**
- Immersive, memorable user experiences
- Successful exploration of "ugly" as intentional aesthetic
- Demonstration of browser capabilities beyond typical web applications
- Balance between user control and autonomous evolution

**Impact**
These experimental projects serve as:
- Creative outlets for exploring unconventional ideas
- Technical demonstrations of advanced browser capabilities
- Portfolio pieces showing range beyond commercial work
- Learning exercises for shader programming and audio synthesis

---

## Key Features

✓ **WebGL Fragment Shaders** - Real-time fractal brownian motion, domain warping, and kaleidoscopic transformations rendered at 60fps

✓ **Procedural Audio** - Web Audio API synthesis with layered oscillators, LFO modulation, and filtered noise for ambient soundscapes

✓ **Particle Systems** - Canvas-based particle physics with trails, burst effects, and mouse interaction

✓ **Multiple Visual Modes** - Six distinct shader programs: fractal dream, kaleidoscope, infinite tunnel, cosmic melt, sacred geometry, and void collapse

✓ **Retro Web Aesthetics** - Authentic GeoCities-era design with marquees, visitor counters, guestbooks, and cascading pop-ups

✓ **Interactive Elements** - Custom cursors, click effects, mouse trails, and responsive audio that reacts to user interaction

---

## Lessons Learned

1. **Performance is paramount** - Even the most beautiful visuals fail if they stutter. Optimize early and often.

2. **Mathematics creates beauty** - Simple mathematical functions (sine waves, fractals, polar coordinates) can generate incredibly organic, beautiful patterns.

3. **Intentional "bad" design is hard** - Creating something that looks deliberately ugly while still being functional requires as much craft as polished design.

4. **Audio enhances immersion** - Adding procedural audio transformed the visual experience into something truly immersive.

5. **Progressive enhancement matters** - Not all browsers support WebGL. Fallbacks and feature detection are essential.

---

## Future Directions

- Port to Three.js for more complex 3D scenes
- Add MIDI controller support for live performance
- Create generative music that evolves with visuals
- Build a VJ tool interface for real-time parameter control
- Explore WebGPU for next-generation graphics performance

---

*This project represents an exploration of creative coding and the artistic potential of web technologies. It demonstrates that browsers are capable of far more than typical web applications, and that mathematical beauty can be realized through code.*
